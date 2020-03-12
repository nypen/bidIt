"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actions = require("../actions");
var react_redux_1 = require("react-redux");
var Guest_1 = require("../components/Guest");
var mapStateToProps = function (state) { return ({
    items: state.itemsPage.items,
}); };
var mapDispatchToProps = function (dispatch) {
    return {
        getData: function () { return dispatch(Actions.getItems()); },
    };
};
var GuestContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Guest_1.Guest);
exports.GuestContainer = GuestContainer;
//# sourceMappingURL=guestContainer.js.map