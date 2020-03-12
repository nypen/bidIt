"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actions = require("../actions");
var Login_1 = require("../components/Login");
var react_redux_1 = require("react-redux");
var Routes = require("../components/routes");
var mapStateToProps = function (state) { return ({
    isAuthenticated: state.sessionInfo.isAuthenticated,
}); };
var mapDispatchToProps = function (dispatch) {
    return {
        login: function (email, password) { return dispatch(Actions.login(email, password)); },
        routetoregister: function () { return dispatch(Actions.routeTo(Routes.registerPage)); },
        routetoguest: function () { return dispatch(Actions.routeTo(Routes.guest)); },
    };
};
var LoginContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Login_1.Login);
exports.LoginContainer = LoginContainer;
//# sourceMappingURL=loginContainer.js.map