"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var core_1 = require("@material-ui/core");
var SearchBar_1 = require("./SearchBar");
var ArrowBack_1 = require("@material-ui/icons/ArrowBack");
var ItemInfo_1 = require("./ItemInfo");
;
var Guest = function (props) {
    var _a = tslib_1.__read(React.useState(null), 2), chosenItem = _a[0], setChosenItem = _a[1];
    function handleItemButton(x) {
        setChosenItem(x);
    }
    function handleBackClick() {
        setChosenItem(null);
    }
    var getCardItems = function (items) {
        return (React.createElement(core_1.Grid, { container: true, justify: "center", spacing: 1 }, items && items.map(function (x) {
            return React.createElement(core_1.Grid, { item: true, xs: 12 },
                React.createElement(core_1.Card, { raised: true },
                    React.createElement(core_1.CardContent, null,
                        React.createElement(core_1.Grid, { container: true },
                            React.createElement(core_1.Grid, { item: true, xs: 6 },
                                React.createElement(core_1.Typography, { variant: "h5", component: "h2", color: "textSecondary" }, x.name)),
                            React.createElement(core_1.Grid, { container: true, justify: "flex-end", item: true, xs: 12 },
                                React.createElement(core_1.Button, { variant: 'contained', color: 'inherit', onClick: function () { return handleItemButton(x); } }, " Visit Auction"))))));
        })));
    };
    React.useEffect(function () {
        props.getData();
    }, []);
    return (React.createElement("div", null,
        React.createElement(core_1.AppBar, { color: "primary", position: "static" },
            React.createElement(core_1.Grid, { justify: "center", container: true },
                React.createElement(core_1.Grid, { item: true },
                    React.createElement("h1", null, "BidIt")))),
        chosenItem === null ?
            React.createElement(core_1.Container, null,
                React.createElement(core_1.Grid, { container: true, direction: "column", justify: "center", alignItems: "center", spacing: 4 },
                    React.createElement(core_1.Grid, { item: true, style: { marginTop: 20 } },
                        React.createElement(SearchBar_1.SearchBar, null)),
                    React.createElement(core_1.Grid, { item: true, xs: 8 }, getCardItems(props.items))))
            :
                React.createElement(core_1.Container, null,
                    React.createElement(core_1.IconButton, { onClick: handleBackClick, size: "medium" },
                        React.createElement(ArrowBack_1.default, { fontSize: "inherit" }),
                        "Back to browse"),
                    React.createElement(ItemInfo_1.ItemInfo, { item: chosenItem }))));
};
exports.Guest = Guest;
//# sourceMappingURL=Guest.js.map