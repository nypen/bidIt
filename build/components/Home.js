"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var AccountCircle_1 = require("@material-ui/icons/AccountCircle");
var ExitToApp_1 = require("@material-ui/icons/ExitToApp");
var Menu_1 = require("@material-ui/icons/Menu");
var ArrowBack_1 = require("@material-ui/icons/ArrowBack");
var core_1 = require("@material-ui/core");
var SearchBar_1 = require("./SearchBar");
var ViewItem_1 = require("./ViewItem");
var formItemContainer_1 = require("../containers/formItemContainer");
var ItemInfo_1 = require("./ItemInfo");
;
var Home = function (props) {
    var _a = tslib_1.__read(React.useState(null), 2), anchorEl = _a[0], setAnchorEl = _a[1];
    var _b = tslib_1.__read(React.useState(0), 2), activeTab = _b[0], setAT = _b[1];
    var open = Boolean(anchorEl);
    var _c = tslib_1.__read(React.useState(false), 2), hasAuctions = _c[0], setHasAuctions = _c[1];
    var _d = tslib_1.__read(React.useState(null), 2), chosenItem = _d[0], setChosenItem = _d[1];
    function handleClick(event) {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    }
    function handleMenuClick(value) {
        setAnchorEl(null);
        setChosenItem(null);
        setAT(value);
    }
    ;
    function handleBackClick() {
        setChosenItem(null);
    }
    function handleItemButton(x) {
        setChosenItem(x);
    }
    var getCardItemsById = function (items) {
        return (React.createElement(core_1.Grid, { container: true, justify: "center", spacing: 1 }, items && items.map(function (x) {
            return x.seller.id === props.user.id ?
                React.createElement(core_1.Grid, { item: true, xs: 12 },
                    React.createElement(core_1.Card, { raised: true },
                        React.createElement(core_1.CardContent, null,
                            React.createElement(core_1.Grid, { container: true },
                                React.createElement(core_1.Grid, { item: true, xs: 6 },
                                    React.createElement(core_1.Typography, { variant: "h5", component: "h2", color: "textSecondary" }, x.name)),
                                React.createElement(core_1.Grid, { container: true, justify: "flex-end", item: true, xs: 12 },
                                    React.createElement(core_1.Button, { variant: 'contained', color: 'inherit', onClick: function () { return handleItemButton(x); } }, " Visit Auction"))))))
                : '';
        })));
    };
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
            React.createElement(core_1.Grid, { container: true },
                React.createElement(core_1.Grid, { item: true, sm: true },
                    React.createElement(core_1.IconButton, { color: 'inherit', onClick: handleClick },
                        React.createElement(Menu_1.default, { fontSize: "large", style: { marginTop: 15 } })),
                    React.createElement(core_1.Popper, { open: open, anchorEl: anchorEl, transition: true }, function (_a) {
                        var TransitionProps = _a.TransitionProps;
                        return (React.createElement(core_1.Grow, tslib_1.__assign({}, TransitionProps),
                            React.createElement(core_1.Paper, null,
                                React.createElement(core_1.MenuList, null,
                                    React.createElement(core_1.MenuItem, { value: 0, onClick: function () { return handleMenuClick(0); } }, "Browse Auctions"),
                                    React.createElement(core_1.MenuItem, { value: 1, onClick: function () { return handleMenuClick(1); } }, "View my Auctions"),
                                    React.createElement(core_1.MenuItem, { value: 2, onClick: function () { return handleMenuClick(2); } }, "post")))));
                    })),
                React.createElement(core_1.Grid, { item: true, sm: true },
                    React.createElement("h1", null, "BidIt")),
                React.createElement(core_1.Grid, { item: true, style: { marginRight: 50, marginTop: '20px' } },
                    React.createElement(AccountCircle_1.default, { style: { marginRight: 4, marginTop: 5 } }),
                    " ",
                    props.user.firstname),
                React.createElement(core_1.Grid, { item: true, style: { marginRight: 50, marginTop: '25px' } },
                    React.createElement(core_1.IconButton, { size: 'small', color: "inherit" },
                        React.createElement(ExitToApp_1.default, null),
                        "LogOut")))),
        activeTab === 0 ?
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
                        React.createElement(ViewItem_1.ViewItem, { item: chosenItem }))
            : activeTab === 1 ?
                chosenItem === null ?
                    React.createElement(core_1.Container, { style: { marginTop: 20 } },
                        getCardItemsById(props.items),
                        React.createElement(core_1.Typography, { align: "center", component: "h1", variant: "h5", style: { marginTop: 40 } },
                            React.createElement(core_1.Button, { type: "submit", variant: "contained", color: "primary", onClick: function () { return setAT(2); } }, "Post one now!")))
                    :
                        React.createElement(core_1.Container, null,
                            React.createElement(core_1.IconButton, { onClick: handleBackClick, size: "medium" },
                                React.createElement(ArrowBack_1.default, { fontSize: "inherit" }),
                                "Back to browse"),
                            React.createElement(ItemInfo_1.ItemInfo, { item: chosenItem }))
                :
                    React.createElement(formItemContainer_1.FormItemContainer, null)));
    // return (<div>{props.items && props.items.length}</div>);
};
exports.Home = Home;
//# sourceMappingURL=Home.js.map