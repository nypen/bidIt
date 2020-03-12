"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actions = require("../actions");
var react_redux_1 = require("react-redux");
var FormItem_1 = require("../components/FormItem");
var mapStateToProps = function (state) { return ({
    user: state.userState.user,
}); };
var mapDispatchToProps = function (dispatch) {
    return {
        postitem: function (userId, name, description, country, duration, firstbid, buyprice) { return dispatch(Actions.postItem(userId, name, description, country, duration, firstbid, buyprice)); },
    };
};
var FormItemContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(FormItem_1.FormItem);
exports.FormItemContainer = FormItemContainer;
//# sourceMappingURL=formItemContainer.js.map