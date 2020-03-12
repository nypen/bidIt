"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var effects_1 = require("redux-saga/effects");
var sessionSaga_1 = require("./sessionSaga");
var itemSaga_1 = require("./itemSaga");
var registerSaga_1 = require("./registerSaga");
function rootSaga(client) {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.all([
                    effects_1.call(sessionSaga_1.sessionSaga, client),
                    effects_1.call(itemSaga_1.itemSaga, client),
                    effects_1.call(registerSaga_1.registerSaga, client),
                ])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.rootSaga = rootSaga;
//# sourceMappingURL=index.js.map