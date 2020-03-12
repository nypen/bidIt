"use strict";
// These are special actions used by the react-router-redux framework.
// That is why they are declared differently to our other actions.
// They are handled by a reducer added by the framework.
Object.defineProperty(exports, "__esModule", { value: true });
var connected_react_router_1 = require("connected-react-router");
var routeTo = function (path) {
    return connected_react_router_1.push(path);
};
exports.routeTo = routeTo;
//# sourceMappingURL=routerActions.js.map