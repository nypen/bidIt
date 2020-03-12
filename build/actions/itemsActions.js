"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemsActionTypes;
(function (ItemsActionTypes) {
    ItemsActionTypes["GetItems"] = "GetItems";
    ItemsActionTypes["SetItems"] = "SetItems";
    ItemsActionTypes["PostItem"] = "PostItem";
})(ItemsActionTypes || (ItemsActionTypes = {}));
exports.ItemsActionTypes = ItemsActionTypes;
var getItems = function () { return ({
    type: ItemsActionTypes.GetItems,
}); };
exports.getItems = getItems;
var postItem = function (userId, name, description, country, duration, firstbid, buyprice) { return ({
    type: ItemsActionTypes.PostItem,
    userId: userId,
    name: name,
    description: description,
    country: country,
    duration: duration,
    firstbid: firstbid,
    buyprice: buyprice,
}); };
exports.postItem = postItem;
var setItems = function (items) { return ({
    type: ItemsActionTypes.SetItems,
    items: items,
}); };
exports.setItems = setItems;
//# sourceMappingURL=itemsActions.js.map