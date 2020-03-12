"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var connected_react_router_1 = require("connected-react-router");
var sessionReducer_1 = require("./sessionReducer");
var itemsPageReducer_1 = require("./itemsPageReducer");
var userReducer_1 = require("./userReducer");
var rootReducer = function (history) { return redux_1.combineReducers({
    router: connected_react_router_1.connectRouter(history),
    sessionInfo: sessionReducer_1.sessionReducer,
    itemsPage: itemsPageReducer_1.itemsPageReducer,
    userState: userReducer_1.userReducer,
}); };
exports.default = rootReducer;
//# sourceMappingURL=index.js.map