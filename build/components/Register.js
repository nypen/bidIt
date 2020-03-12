"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var core_1 = require("@material-ui/core");
;
;
var SignUp = function (props) {
    var _a = tslib_1.__read(React.useState(""), 2), username = _a[0], setUsername = _a[1];
    var _b = tslib_1.__read(React.useState(""), 2), fn = _b[0], setFn = _b[1];
    var _c = tslib_1.__read(React.useState(""), 2), ln = _c[0], setLn = _c[1];
    var _d = tslib_1.__read(React.useState(""), 2), pn = _d[0], setPn = _d[1];
    var _e = tslib_1.__read(React.useState(""), 2), afm = _e[0], setAfm = _e[1];
    var _f = tslib_1.__read(React.useState(""), 2), email = _f[0], setEmail = _f[1];
    var _g = tslib_1.__read(React.useState(""), 2), country = _g[0], setCountry = _g[1];
    var _h = tslib_1.__read(React.useState(""), 2), city = _h[0], setCity = _h[1];
    var _j = tslib_1.__read(React.useState(""), 2), street = _j[0], setStreet = _j[1];
    var _k = tslib_1.__read(React.useState(""), 2), aptno = _k[0], setAptNo = _k[1];
    var _l = tslib_1.__read(React.useState(""), 2), zip = _l[0], setZip = _l[1];
    var _m = tslib_1.__read(React.useState(""), 2), password = _m[0], setPassword = _m[1];
    var _o = tslib_1.__read(React.useState(""), 2), password2 = _o[0], setPassword2 = _o[1];
    var _p = tslib_1.__read(React.useState(0), 2), passwordWrong = _p[0], setPW = _p[1];
    var clickRegisterButton = function () {
        checkPassword(password);
        if (password !== password2) {
            setPW(3);
        }
        if (passwordWrong == 1) {
            props.register(username, fn, ln, email, password, pn, afm, country, city, street, aptno, zip);
            props.registerbutton();
        }
    };
    var checkPassword = function (value) {
        var regex = new RegExp("[A-Z]+"); // Check for uppercase first
        if (value.length >= 7) {
            if (regex.test(value) == true) {
                regex = new RegExp("[0-9]+"); // Now we check for numbers   
                if (regex.test(value) == true) {
                    regex = new RegExp("[a-z]+"); // checking now for lowercase
                    if (regex.test(value) == true) {
                        regex = new RegExp("/^[A-Za-z0-9 ]+$/"); //checking for symbols
                        if (!regex.test(value) == true) {
                            setPW(1);
                            setPassword(value);
                        }
                        else {
                            setPW(2);
                        }
                    }
                    else {
                        setPW(4);
                    }
                }
                else {
                    setPW(5);
                }
            }
            else {
                setPW(6);
            }
        }
        else {
            setPW(7);
        }
    };
    var getForm = function () {
        return React.createElement(core_1.Grid, { container: true, direction: "row", justify: "center", alignItems: "flex-start", spacing: 8 },
            React.createElement(core_1.Grid, { item: true },
                React.createElement(core_1.Grid, { container: true, direction: "column", justify: "space-between", alignItems: "flex-start", spacing: 2 },
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement(core_1.TextField, { autoComplete: "username", name: "username", variant: "outlined", required: true, fullWidth: true, id: "username", label: "Username", autoFocus: true, value: username, onChange: function (event) { return setUsername(event.target.value); } })),
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement(core_1.TextField, { autoComplete: "fname", name: "firstName", variant: "outlined", required: true, fullWidth: true, id: "firstName", label: "First Name", autoFocus: true, value: fn, onChange: function (event) { return setFn(event.target.value); } })),
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement(core_1.TextField, { variant: "outlined", required: true, fullWidth: true, id: "lastName", label: "Last Name", name: "lastName", autoComplete: "lname", value: ln, onChange: function (event) { return setLn(event.target.value); } })),
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement(core_1.TextField, { variant: "outlined", required: true, fullWidth: true, id: "email", label: "Email Address", name: "email", autoComplete: "email", value: email, onChange: function (event) { return setEmail(event.target.value); } })),
                    React.createElement(core_1.Grid, { item: true, xs: 12 }, passwordWrong >= 2 ?
                        React.createElement(core_1.TextField, { variant: "outlined", required: true, error: true, fullWidth: true, name: "password", label: "Password", helperText: "Password must contain 7 characters,at least 1 upper case,1 number and 1 symbol", type: "password", id: "password", autoComplete: "current-password", value: password, onChange: function (event) { return setPassword(event.target.value); } })
                        : React.createElement(core_1.TextField, { variant: "outlined", required: true, fullWidth: true, name: "password", label: "Password", type: "password", id: "password", autoComplete: "current-password", value: password, onChange: function (event) { return setPassword(event.target.value); } })),
                    React.createElement(core_1.Grid, { item: true, xs: 12 }, passwordWrong == 3 ?
                        React.createElement(core_1.TextField, { variant: "outlined", required: true, error: true, fullWidth: true, name: "confirm password", label: "Confirm Password", type: "password", id: "password", autoComplete: "current-password", helperText: "Passwords must be identical", value: password2, onChange: function (event) { return setPassword2(event.target.value); } })
                        : React.createElement(core_1.TextField, { variant: "outlined", required: true, fullWidth: true, name: "confirm password", label: "Confirm Password", type: "password", id: "password2", autoComplete: "current-password", value: password2, onChange: function (event) { return setPassword2(event.target.value); } })),
                    React.createElement(core_1.Grid, { item: true, xs: 12 },
                        React.createElement(core_1.TextField, { variant: "outlined", required: true, fullWidth: true, name: "phonenumber", label: "Phone Number", id: "phonenumber", autoComplete: "phonenumber", value: pn, onChange: function (event) { return setPn(event.target.value); } })))),
            React.createElement(core_1.Grid, { item: true },
                React.createElement(core_1.Grid, { container: true, direction: "column", justify: "space-between", alignItems: "flex-start", spacing: 2 },
                    React.createElement(core_1.Grid, { item: true, xs: 12 },
                        React.createElement(core_1.TextField, { variant: "outlined", required: true, fullWidth: true, name: "afm", label: "AFM", id: "afm", autoComplete: "afm", value: afm, onChange: function (event) { return setAfm(event.target.value); } })),
                    React.createElement(core_1.Grid, { item: true, xs: 12 },
                        React.createElement(core_1.TextField, { variant: "outlined", required: true, fullWidth: true, name: "country", label: "Country", id: "country", autoComplete: "country", value: country, onChange: function (event) { return setCountry(event.target.value); } })),
                    React.createElement(core_1.Grid, { item: true, xs: 12 },
                        React.createElement(core_1.TextField, { variant: "outlined", required: true, fullWidth: true, name: "city", label: "City", id: "city", autoComplete: "city", value: city, onChange: function (event) { return setCity(event.target.value); } })),
                    React.createElement(core_1.Grid, { item: true, xs: 12 },
                        React.createElement(core_1.TextField, { variant: "outlined", required: true, fullWidth: true, name: "street", label: "Street", id: "street", autoComplete: "street", value: street, onChange: function (event) { return setStreet(event.target.value); } })),
                    React.createElement(core_1.Grid, { item: true, xs: 12 },
                        React.createElement(core_1.TextField, { variant: "outlined", required: true, fullWidth: true, name: "aptno", label: "Apt No", id: "aptno", autoComplete: "aptno", value: aptno, onChange: function (event) { return setAptNo(event.target.value); } })),
                    React.createElement(core_1.Grid, { item: true, xs: 12 },
                        React.createElement(core_1.TextField, { variant: "outlined", required: true, fullWidth: true, name: "zipcode", label: "Zip Code", id: "zipcode", autoComplete: "zipcode", value: zip, onChange: function (event) { return setZip(event.target.value); } })))));
    };
    var button = function () { return React.createElement(core_1.Button, { style: { width: 200 }, type: "submit", variant: "contained", color: "primary", onClick: function () { return clickRegisterButton(); } }, "Register"); };
    var getButtons = function () {
        return React.createElement(core_1.Grid, { item: true, xs: 12 }, button());
    };
    return (React.createElement(core_1.Container, { component: "main" },
        React.createElement(core_1.Paper, null,
            React.createElement(core_1.Typography, { style: { marginLeft: 250, marginBottom: 20 }, component: "h1", variant: "h5" }, "Sign Up"),
            getForm(),
            React.createElement("div", { style: { marginLeft: 800, marginBottom: 40 } },
                getButtons(),
                React.createElement(core_1.Link, { href: "#", variant: "body2" }, "Already have an account? Sign in")))));
};
exports.SignUp = SignUp;
//# sourceMappingURL=Register.js.map