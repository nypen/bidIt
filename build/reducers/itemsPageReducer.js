"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var appState_1 = require("../appState");
var Actions = require("../actions");
var itemsPageReducer = function (state, action) {
    if (state === void 0) { state = appState_1.initializeAppState().itemsPage; }
    switch (action.type) {
        case Actions.ItemsActionTypes.SetItems:
        case Actions.ItemsActionTypes.SetItems:
            return tslib_1.__assign(tslib_1.__assign({}, state), { items: action.items });
        default:
            return state;
    }
};
exports.itemsPageReducer = itemsPageReducer;
//# sourceMappingURL=itemsPageReducer.js.map