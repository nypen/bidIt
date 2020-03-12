"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actions = require("../actions");
var react_redux_1 = require("react-redux");
var Home_1 = require("../components/Home");
var Routes = require("../components/routes");
var mapStateToProps = function (state) { return ({
    items: state.itemsPage.items,
    user: state.userState.user,
}); };
var mapDispatchToProps = function (dispatch) {
    return {
        getData: function () { return dispatch(Actions.getItems()); },
        viewitembutton: function () { return dispatch(Actions.routeTo(Routes.viewitem)); },
    };
};
var HomeContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Home_1.Home);
exports.HomeContainer = HomeContainer;
//# sourceMappingURL=homeContainer.js.map