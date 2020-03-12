"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Routes = require("../components/routes");
var Actions = require("../actions");
var appState_1 = require("../appState");
var connected_react_router_1 = require("connected-react-router");
var sessionReducer = function (state, action) {
    if (state === void 0) { state = appState_1.initializeAppState().sessionInfo; }
    switch (action.type) {
        case Actions.SessionActionTypes.SetRequestedUrl:
            switch (action.requestedUrl) {
                case Routes.loginPage:
                    return state;
                default:
                    return tslib_1.__assign(tslib_1.__assign({}, state), { requestedUrl: action.requestedUrl });
            }
        case Actions.SessionActionTypes.SetAccessToken:
            return tslib_1.__assign(tslib_1.__assign({}, state), { accessToken: action.accessToken });
        case connected_react_router_1.LOCATION_CHANGE:
            switch (action.payload.location.pathname) {
                case Routes.loginPage:
                    return state;
                default:
                    return tslib_1.__assign(tslib_1.__assign({}, state), { requestedUrl: action.payload.location.pathname + action.payload.location.search });
            }
        default:
            return state;
    }
};
exports.sessionReducer = sessionReducer;
//# sourceMappingURL=sessionReducer.js.map