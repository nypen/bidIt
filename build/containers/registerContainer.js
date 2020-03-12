"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actions = require("../actions");
var react_redux_1 = require("react-redux");
var Register_1 = require("../components/Register");
var Routes = require("../components/routes");
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = function (dispatch) {
    return {
        register: function (username, firstname, lastname, email, password, phonenumber, afm, country, city, street, aptno, zipcode) {
            return dispatch(Actions.register(username, firstname, lastname, email, password, phonenumber, afm, country, city, street, aptno, zipcode));
        },
        registerbutton: function () { return dispatch(Actions.routeTo(Routes.loginPage)); },
    };
};
var SignUpContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Register_1.SignUp);
exports.SignUpContainer = SignUpContainer;
//# sourceMappingURL=registerContainer.js.map