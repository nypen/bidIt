"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var core_1 = require("@material-ui/core");
var Search_1 = require("@material-ui/icons/Search");
;
var SearchBar = function (props) {
    var categories = [
        'Clothing',
        'Equipment',
        'Stuff',
        'Mierda',
    ];
    var countries = [
        'Algeria',
        'France',
        'Germany',
        'Greece',
    ];
    var _a = tslib_1.__read(React.useState([]), 2), categoryName = _a[0], setCategoryName = _a[1];
    var _b = tslib_1.__read(React.useState([]), 2), countryName = _b[0], setCountryName = _b[1];
    var handleCategoryChange = function (event) {
        setCategoryName(event.target.value);
    };
    var handleCountryChange = function (event) {
        setCountryName(event.target.value);
    };
    return (React.createElement(core_1.Paper, null,
        React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center" },
            React.createElement(core_1.Grid, { item: true },
                React.createElement(core_1.InputBase, { style: { marginLeft: 10 }, placeholder: "Search..." })),
            React.createElement(core_1.Grid, { item: true },
                React.createElement(core_1.IconButton, { "aria-label": "search", style: { marginLeft: 300 } },
                    React.createElement(Search_1.default, null)))),
        React.createElement(core_1.Divider, { orientation: "horizontal" }),
        React.createElement(core_1.Grid, { container: true, direction: "row", justify: "flex-start", alignItems: "center", spacing: 3 },
            React.createElement(core_1.Grid, { item: true },
                React.createElement(core_1.FormControl, { style: { marginTop: 10, marginBottom: 5, marginLeft: 10 } },
                    React.createElement(core_1.InputLabel, { htmlFor: "select-multiple-checkbox" }, "Category"),
                    React.createElement(core_1.Select, { style: { width: 250 }, multiple: true, value: categoryName, onChange: handleCategoryChange, renderValue: function (selected) { return selected.join(', '); } },
                        React.createElement(core_1.MenuItem, { value: "" },
                            React.createElement("em", null, "None")),
                        categories.map(function (category) { return (React.createElement(core_1.MenuItem, { key: category, value: category },
                            React.createElement(core_1.Checkbox, { checked: categoryName.indexOf(category) > -1 }),
                            React.createElement(core_1.ListItemText, { primary: category }))); })))),
            React.createElement(core_1.Grid, { item: true, style: { marginTop: 20 } },
                "Price Range:",
                React.createElement(core_1.Input, { style: { marginLeft: 5 }, placeholder: "From" }),
                "(\u20AC)"),
            React.createElement(core_1.Grid, { item: true, style: { marginTop: 20 } }, "-"),
            React.createElement(core_1.Grid, { item: true, style: { marginTop: 20 } },
                React.createElement(core_1.Input, { placeholder: "To" }),
                "(\u20AC)"),
            React.createElement(core_1.Grid, { item: true },
                React.createElement(core_1.FormControl, { style: { marginTop: 10, marginBottom: 5, marginLeft: 10 } },
                    React.createElement(core_1.InputLabel, null, "Country"),
                    React.createElement(core_1.Select, { style: { width: 250 }, value: countryName, onChange: handleCountryChange },
                        React.createElement(core_1.MenuItem, { value: "" },
                            React.createElement("em", null, "None")),
                        countries.map(function (country) { return (React.createElement(core_1.MenuItem, { key: country, value: country },
                            React.createElement(core_1.ListItemText, { primary: country }))); })))))));
};
exports.SearchBar = SearchBar;
//# sourceMappingURL=SearchBar.js.map