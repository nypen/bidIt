"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var core_1 = require("@material-ui/core");
function Register(props) {
    var _a = tslib_1.__read(React.useState(""), 2), name = _a[0], setName = _a[1];
    var _b = tslib_1.__read(React.useState(""), 2), surname = _b[0], setSurname = _b[1];
    var _c = tslib_1.__read(React.useState(0), 2), age = _c[0], setAge = _c[1];
    var i = function () { return React.createElement(core_1.Input, { value: name, onChange: function (e) {
            e.preventDefault();
            setName(e.target.value);
        } }); };
    var i2 = function () { return React.createElement(core_1.Input, { value: surname, onChange: function (e) {
            e.preventDefault();
            setSurname(e.target.value);
        } }); };
    var i3 = function () { return React.createElement(core_1.Input, { value: age, onChange: function (e) {
            e.preventDefault();
            setAge(Number(e.target.value));
        } }); };
    var getForm = function () {
        return React.createElement(core_1.Grid, { container: true },
            React.createElement(core_1.Typography, null, props.date.toDateString()),
            React.createElement(core_1.Grid, { item: true, xs: 12 }, i()),
            React.createElement(core_1.Grid, { item: true, xs: 12 }, i2()),
            React.createElement(core_1.Grid, { item: true, xs: 12 }, i3()));
    };
    var b = function () { return React.createElement(core_1.Button, { disabled: !name || !surname, onClick: function () {
            var user = {
                name: name,
                surname: surname,
                age: age,
            };
            props.register(user);
        } }); };
    var getButtons = function () {
        return React.createElement(core_1.Grid, { container: true, justify: "flex-end" },
            React.createElement(core_1.Grid, { item: true }, b()));
    };
    return (React.createElement(core_1.Grid, { container: true, justify: "center" },
        React.createElement(core_1.Grid, { item: true, xs: 12 }, getForm()),
        React.createElement(core_1.Grid, { item: true, xs: 12 }, getButtons())));
}
exports.Register = Register;
//# sourceMappingURL=Register1.js.map