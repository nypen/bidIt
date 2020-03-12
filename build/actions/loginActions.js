"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginActionTypes;
(function (LoginActionTypes) {
    LoginActionTypes["Login"] = "LOGIN";
})(LoginActionTypes || (LoginActionTypes = {}));
exports.LoginActionTypes = LoginActionTypes;
var login = function (email, password) { return ({
    type: LoginActionTypes.Login,
    email: email,
    password: password,
}); };
exports.login = login;
//# sourceMappingURL=loginActions.js.map