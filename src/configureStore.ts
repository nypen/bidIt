import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";
import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import { initializeAppState } from "./appState";
import { createLogger } from "redux-logger";
import { rootSaga } from "./sagas/index";
import { History, createBrowserHistory } from "history";
import { AxiosHttpClient } from './axiosClient';
import axios from 'axios';

function configureStore(historyArg: History) {
    const loggerMiddleware = createLogger({ diff: true });
    const sagaMiddleware = createSagaMiddleware();
    const routeMiddleware = routerMiddleware(historyArg);

    const appState = initializeAppState();

    const middleWare = applyMiddleware(
        sagaMiddleware,
        loggerMiddleware,
        routeMiddleware,
    );

    const storeResult = createStore(rootReducer(historyArg), appState, middleWare);

    const axiosInstant = axios.create({
        baseURL: "https://localhost:5040/api",
        headers: {"Access-Control-Allow-Origin": "*"}
    });

    const axiosClient = new AxiosHttpClient(axiosInstant);

    sagaMiddleware.run(rootSaga, axiosClient);

    return storeResult;
}

// Export store instance here because if we use configure store in the same component that houses <Provider>
// it gets called at every hot reload
const history = createBrowserHistory();
const store = configureStore(history);

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers/index", () => {
        const nextRootReducer = require("./reducers/index");
        store.replaceReducer(nextRootReducer);
    });
}

export {
    configureStore,
    store,
    history,
};
