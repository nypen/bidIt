"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actions = require("../actions");
var root_1 = require("../components/root");
var react_redux_1 = require("react-redux");
var mapStateToProps = function (state) {
    return {
        isAuthenticated: state.sessionInfo.isAuthenticated,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        initialize: function (requestedUrl) { return dispatch(Actions.setRequestedUrl(requestedUrl)); },
    };
};
var RootContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(root_1.Root);
exports.RootContainer = RootContainer;
//# sourceMappingURL=rootContainer.js.map