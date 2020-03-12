"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Actions = require("../actions");
var appState_1 = require("../appState");
var userReducer = function (state, action) {
    if (state === void 0) { state = appState_1.initializeAppState().userState; }
    switch (action.type) {
        case Actions.UserActionTypes.SetUser:
        case Actions.UserActionTypes.SetUser:
            return tslib_1.__assign(tslib_1.__assign({}, state), { user: action.user });
        default:
            return state;
    }
};
exports.userReducer = userReducer;
//# sourceMappingURL=userReducer.js.map