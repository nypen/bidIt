"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SignUpActionTypes;
(function (SignUpActionTypes) {
    SignUpActionTypes["SignUp"] = "SIGNUP";
})(SignUpActionTypes || (SignUpActionTypes = {}));
exports.SignUpActionTypes = SignUpActionTypes;
var register = function (username, firstname, lastname, email, password, phonenumber, afm, country, city, street, aptno, zipcode) { return ({
    type: SignUpActionTypes.SignUp,
    username: username, firstname: firstname, lastname: lastname, email: email, password: password, phonenumber: phonenumber, afm: afm, country: country, city: city, street: street, aptno: aptno, zipcode: zipcode,
}); };
exports.register = register;
//# sourceMappingURL=registerActions.js.map