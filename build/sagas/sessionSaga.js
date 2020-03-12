"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Routes = require("../components/routes");
var Actions = require("../actions");
var effects_1 = require("redux-saga/effects");
function LoginWatcher(client) {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(Actions.LoginActionTypes.Login, loginCallback, client)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function loginCallback(client, action) {
    var result, authToken, user, requestedUrl, e_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 9, , 10]);
                return [4 /*yield*/, effects_1.call([client, client.postAsync], "/Account/Login", { Email: action.email, Password: action.password })];
            case 1:
                result = _a.sent();
                authToken = result.item1;
                client.setConfig({ authToken: authToken });
                user = result.item2;
                return [4 /*yield*/, effects_1.put(Actions.setAccessToken(authToken))];
            case 2:
                _a.sent();
                console.log({ user: user });
                return [4 /*yield*/, effects_1.put(Actions.setUser(user))];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.select(function (state) { return state.sessionInfo.requestedUrl; })];
            case 4:
                requestedUrl = _a.sent();
                if (!(requestedUrl !== null && requestedUrl !== Routes.root)) return [3 /*break*/, 6];
                return [4 /*yield*/, effects_1.put(Actions.routeTo(requestedUrl))];
            case 5:
                _a.sent();
                return [3 /*break*/, 8];
            case 6: return [4 /*yield*/, effects_1.put(Actions.routeTo(Routes.home))];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                e_1 = _a.sent();
                console.error(e_1);
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}
function sessionSaga(client) {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.all([
                    effects_1.call(LoginWatcher, client),
                ])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.sessionSaga = sessionSaga;
//# sourceMappingURL=sessionSaga.js.map