"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["SetUser"] = "SetUser";
    UserActionTypes["GetUser"] = "GetUser";
})(UserActionTypes || (UserActionTypes = {}));
exports.UserActionTypes = UserActionTypes;
var setUser = function (user) { return ({
    type: UserActionTypes.SetUser,
    user: user,
}); };
exports.setUser = setUser;
var getUser = function () { return ({
    type: UserActionTypes.GetUser,
}); };
exports.getUser = getUser;
//# sourceMappingURL=userActions.js.map