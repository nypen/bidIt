"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var core_1 = require("@material-ui/core");
;
var FormItem = function (props) {
    var _a = tslib_1.__read(React.useState(""), 2), name = _a[0], setName = _a[1];
    var _b = tslib_1.__read(React.useState(""), 2), buyPrice = _b[0], setBuyPrice = _b[1];
    var _c = tslib_1.__read(React.useState(""), 2), lowBid = _c[0], setLowBid = _c[1];
    var _d = tslib_1.__read(React.useState(""), 2), descr = _d[0], setDescr = _d[1];
    var _e = tslib_1.__read(React.useState(0), 2), hours = _e[0], setHours = _e[1];
    var _f = tslib_1.__read(React.useState(0), 2), minutes = _f[0], setMinutes = _f[1];
    var clickPostItem = function (event) {
        props.postitem(props.user.id, name, descr, "Algeria" //props.user.country
        , hours + ":" + minutes + ":59.9999999", lowBid, buyPrice);
    };
    return (React.createElement(core_1.Container, null,
        React.createElement(core_1.Paper, { style: { marginTop: 30, height: 550 } },
            React.createElement("h1", { style: { marginTop: 20, marginLeft: 100 } }, "Post an Item"),
            React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-around", alignItems: "flex-start" },
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(core_1.Grid, { container: true, direction: "column", justify: "space-between", alignItems: "flex-start", spacing: 3 },
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement(core_1.TextField, { required: true, placeholder: "Ex. Vintage Record Player", name: "name", variant: "outlined", fullWidth: true, id: "itemTitle", label: "Item Title", autoFocus: true, value: name, onChange: function (event) { return setName(event.target.value); } })),
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement(core_1.TextField, { placeholder: "Ex. 100", name: "buyPrice", variant: "outlined", fullWidth: true, id: "buyPrice", label: "Buy Price(\u20AC)", helperText: "If buy price '\\n is bidded , the bidder wins the auction", value: buyPrice, onChange: function (event) { return setBuyPrice(event.target.value); } })),
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement(core_1.TextField, { required: true, placeholder: "Ex. 100", name: "lowBid", variant: "outlined", fullWidth: true, type: "number", id: "lowBid", label: "Lowest Bid(\u20AC)", helperText: "Lowest price of bids", value: lowBid, onChange: function (event) { return setLowBid(event.target.value); } })),
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement(core_1.TextField, { required: true, style: { width: 300 }, multiline: true, rows: 5, autoComplete: "Description", name: "description", variant: "outlined", fullWidth: true, id: "description", label: "Description", value: descr, onChange: function (event) { return setDescr(event.target.value); } })))),
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(core_1.Grid, { container: true, direction: "column", justify: "center", alignItems: "flex-start", spacing: 3 },
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement(core_1.Typography, null, "Duration"),
                            React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-around", alignItems: "center", spacing: 2 },
                                React.createElement(core_1.Grid, { item: true },
                                    React.createElement(core_1.TextField, { required: true, id: "endTime", label: "Hours", type: "number", defaultValue: "1", InputLabelProps: { shrink: true, }, value: hours, onChange: function (event) { return setHours(event.target.value); }, inputProps: { step: 1, min: 0, max: 23 } })),
                                React.createElement(core_1.Grid, { item: true },
                                    React.createElement(core_1.TextField, { required: true, id: "endTime", label: "Minutes", type: "number", defaultValue: "1", InputLabelProps: { shrink: true, }, value: minutes, onChange: function (event) { return setMinutes(event.target.value); }, inputProps: { step: 1, min: 0, max: 59 } })))),
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement(core_1.Button, { style: { marginLeft: 90, marginTop: 50 }, type: "submit", fullWidth: true, variant: "contained", color: "primary", onClick: clickPostItem }, "Post Item"))))))));
};
exports.FormItem = FormItem;
//# sourceMappingURL=FormItem.js.map