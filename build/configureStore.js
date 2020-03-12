"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_saga_1 = require("redux-saga");
var index_1 = require("./reducers/index");
var connected_react_router_1 = require("connected-react-router");
var redux_1 = require("redux");
var appState_1 = require("./appState");
var redux_logger_1 = require("redux-logger");
var index_2 = require("./sagas/index");
var history_1 = require("history");
var axiosClient_1 = require("./axiosClient");
var axios_1 = require("axios");
function configureStore(historyArg) {
    var loggerMiddleware = redux_logger_1.createLogger({ diff: true });
    var sagaMiddleware = redux_saga_1.default();
    var routeMiddleware = connected_react_router_1.routerMiddleware(historyArg);
    var appState = appState_1.initializeAppState();
    var middleWare = redux_1.applyMiddleware(sagaMiddleware, loggerMiddleware, routeMiddleware);
    var storeResult = redux_1.createStore(index_1.default(historyArg), appState, middleWare);
    var axiosInstant = axios_1.default.create({
        baseURL: "https://localhost:5040/api",
        headers: { "Access-Control-Allow-Origin": "*" }
    });
    var axiosClient = new axiosClient_1.AxiosHttpClient(axiosInstant);
    sagaMiddleware.run(index_2.rootSaga, axiosClient);
    return storeResult;
}
exports.configureStore = configureStore;
// Export store instance here because if we use configure store in the same component that houses <Provider>
// it gets called at every hot reload
var history = history_1.createBrowserHistory();
exports.history = history;
var store = configureStore(history);
exports.store = store;
if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers/index", function () {
        var nextRootReducer = require("./reducers/index");
        store.replaceReducer(nextRootReducer);
    });
}
//# sourceMappingURL=configureStore.js.map