"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var core_1 = require("@material-ui/core");
;
var Login = function (props) {
    var _a = tslib_1.__read(React.useState(""), 2), email = _a[0], setEmail = _a[1];
    var _b = tslib_1.__read(React.useState(""), 2), password = _b[0], setPassword = _b[1];
    var getForm = function () {
        return React.createElement("div", null,
            React.createElement(core_1.Grid, { container: true, direction: "column", spacing: 3 },
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(core_1.TextField, { variant: "outlined", required: true, fullWidth: true, id: "email", label: "Email Address", name: "email", value: email, onChange: function (event) { return setEmail(event.target.value); } })),
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(core_1.TextField, { variant: "outlined", required: true, fullWidth: true, name: "password", label: "Password", type: "password", id: "password", value: password, onChange: function (event) { return setPassword(event.target.value); } }))));
    };
    var button = function () { return React.createElement(core_1.Button, { type: "submit", fullWidth: true, variant: "contained", color: "primary", onClick: function () { return props.login(email, password); } }, "Login"); };
    var getButtons = function () {
        return React.createElement(core_1.Grid, { item: true, xs: 12 }, button());
    };
    return (React.createElement("div", null,
        React.createElement(core_1.AppBar, { color: "primary", position: "static" },
            React.createElement(core_1.Grid, { justify: "center", container: true },
                React.createElement(core_1.Grid, { item: true },
                    React.createElement("h1", null, "BidIt")))),
        React.createElement(core_1.Container, { component: "main" },
            React.createElement(core_1.Paper, { style: { marginTop: 20, height: 300 } },
                React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-around" },
                    React.createElement(core_1.Grid, { item: true, sm: true },
                        React.createElement(core_1.Grid, { container: true, alignItems: "center", direction: "column", spacing: 5 },
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Typography, { component: "h1", variant: "h5" }, "Login")),
                            React.createElement(core_1.Grid, { item: true }, getForm()),
                            React.createElement(core_1.Grid, { item: true }, getButtons()))),
                    React.createElement(core_1.Grid, { item: true, sm: true },
                        React.createElement(core_1.Grid, { direction: "column", container: true, spacing: 4 },
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Typography, { component: "h1", variant: "h5" }, "Not a member yet?")),
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Typography, { component: "h1", variant: "h5", style: { marginLeft: 40 } },
                                    React.createElement(core_1.Button, { type: "submit", variant: "contained", color: "primary", onClick: function () { return props.routetoregister(); } }, "Sign up"))),
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Typography, { component: "h1", variant: "h5", style: { marginLeft: 70 } }, "or")),
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Typography, null,
                                    React.createElement(core_1.Button, { type: "submit", variant: "contained", color: "primary", onClick: function () { return props.routetoguest(); } }, "Continue as a guest"))))))))));
};
exports.Login = Login;
//# sourceMappingURL=Login.js.map