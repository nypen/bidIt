"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
;
var ItemInfo = function (props) {
    return (React.createElement("div", null,
        React.createElement("h1", { style: { marginLeft: 20, marginTop: 60 } }, props.item.name),
        React.createElement(core_1.Grid, { container: true, direction: "row", alignItems: "center", spacing: 10 },
            React.createElement(core_1.Grid, { item: true, style: { marginLeft: 20 } },
                React.createElement("img", { src: "https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg", style: { width: 200, height: 200 } })),
            React.createElement(core_1.Grid, { item: true },
                React.createElement(core_1.Typography, null,
                    React.createElement(core_1.Box, { fontWeight: "fontWeightBold" }, "Title:"),
                    React.createElement(core_1.Box, { fontWeight: "fontWeightBold" }, "Ends at:"),
                    React.createElement(core_1.Box, { fontWeight: "fontWeightBold" }, "Starting Bid:"),
                    React.createElement(core_1.Box, { fontWeight: "fontWeightBold" }, "Number of bids:"),
                    React.createElement(core_1.Box, { fontWeight: "fontWeightBold" }, "Highest bid:"),
                    React.createElement(core_1.Box, { fontWeight: "fontWeightBold" }, "Buy Price:"),
                    React.createElement(core_1.Box, { fontWeight: "fontWeightBold" }, "Description:"),
                    React.createElement(core_1.Box, { fontWeight: "fontWeightBold" }, "Seller rating:"),
                    React.createElement(core_1.Box, { fontWeight: "fontWeightBold" }, "Status:"))),
            React.createElement(core_1.Grid, { item: true },
                React.createElement(core_1.Typography, null,
                    React.createElement(core_1.Box, { fontWeight: "fontWeightMedium" }, props.item.name),
                    React.createElement(core_1.Box, { fontWeight: "fontWeightMedium" }, props.item.ends),
                    props.item.firstbid !== null ?
                        React.createElement(core_1.Box, { fontWeight: "fontWeightMedium" }, props.item.firstbid)
                        : React.createElement(core_1.Box, { fontWeight: "fontWeightMedium" }, "--"),
                    React.createElement(core_1.Box, { fontWeight: "fontWeightMedium" }, props.item.numOfBids),
                    React.createElement(core_1.Box, { fontWeight: "fontWeightMedium" }, props.item.highestBid),
                    props.item.currently !== null ?
                        React.createElement(core_1.Box, { fontWeight: "fontWeightMedium" }, props.item.currently)
                        : React.createElement(core_1.Box, { fontWeight: "fontWeightMedium" }, "--"),
                    React.createElement(core_1.Box, { fontWeight: "fontWeightMedium" }, props.item.description),
                    React.createElement(core_1.Box, { fontWeight: "fontWeightMedium" }, "4/5"),
                    props.item.isActive ?
                        React.createElement(core_1.Box, { fontWeight: "fontWeightMedium" }, "Active")
                        :
                            React.createElement(core_1.Box, { fontWeight: "fontWeightMedium" }, "Finished"))))));
};
exports.ItemInfo = ItemInfo;
//# sourceMappingURL=ItemInfo.js.map