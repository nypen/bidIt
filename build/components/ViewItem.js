"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ItemInfo_1 = require("./ItemInfo");
var core_1 = require("@material-ui/core");
;
var ViewItem = function (props) {
    var _a = tslib_1.__read(React.useState(false), 2), open = _a[0], setOpen = _a[1];
    var handleOpen = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    return (React.createElement(core_1.Container, null,
        React.createElement(core_1.Paper, null,
            React.createElement(ItemInfo_1.ItemInfo, { item: props.item }),
            React.createElement(core_1.Divider, { orientation: "horizontal" }),
            React.createElement(core_1.Grid, { container: true, direction: "row", justify: "flex-start", alignItems: "center", spacing: 10 },
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(core_1.Typography, { variant: "h6", style: { marginTop: 20, marginLeft: 20 } },
                        React.createElement(core_1.Box, { fontWeight: "fontWeightBold" }, "Bid:"),
                        React.createElement(core_1.TextField, { placeholder: "Ex. 100", variant: "outlined", InputProps: {
                                startAdornment: React.createElement(core_1.InputAdornment, { position: "start" }, "\u20AC"),
                            }, id: "bidPrice" }),
                        React.createElement(core_1.Button, { onClick: handleOpen, style: { marginLeft: 10, marginTop: 10 }, variant: 'contained', color: 'primary' }, "Bid it"))),
                props.item.currently !== 0 ?
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement(core_1.Typography, { variant: "h6", style: { marginTop: 20, marginLeft: 20 } },
                            React.createElement(core_1.Box, { fontWeight: "fontWeightBold" },
                                "Buy item for ",
                                props.item.currently,
                                " \u20AC:"),
                            React.createElement(core_1.Button, { style: { marginLeft: 10, marginTop: 10 }, variant: 'contained', color: 'primary' }, "Buy item")))
                    : ''),
            React.createElement(core_1.Dialog, { open: open, onClose: handleClose },
                React.createElement(core_1.DialogTitle, null, "Are you sure you want to place that bid?"),
                React.createElement(core_1.Button, null, "Yes"),
                React.createElement(core_1.Button, { onClick: handleClose }, "No")))));
};
exports.ViewItem = ViewItem;
//# sourceMappingURL=ViewItem.js.map