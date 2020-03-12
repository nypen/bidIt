"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var effects_1 = require("redux-saga/effects");
var Actions = require("../actions");
function getItemsWatcher(client) {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(Actions.ItemsActionTypes.GetItems, getItems, client)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(Actions.ItemsActionTypes.PostItem, postItem, client)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function getItems(client) {
    var items;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.call([client, client.getAsync], "/Items")];
            case 1:
                items = _a.sent();
                console.log(items);
                return [4 /*yield*/, effects_1.put(Actions.setItems(items))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function postItem(client, action) {
    var uri, response;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                uri = "/Sellers/" + action.userId + "/Items";
                return [4 /*yield*/, effects_1.call([client, client.postAsync], uri, {
                        Name: action.name, Description: action.description, Country: action.country,
                        Duration: action.duration, Firstbid: action.firstbid, BuyPrice: action.buyprice
                    })];
            case 1:
                response = _a.sent();
                console.log(response);
                return [2 /*return*/];
        }
    });
}
function itemSaga(client) {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.all([
                    effects_1.call(getItemsWatcher, client)
                ])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.itemSaga = itemSaga;
//# sourceMappingURL=itemSaga.js.map