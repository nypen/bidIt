"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var effects_1 = require("redux-saga/effects");
var Actions = require("../actions");
function SignUpWatcher(client) {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(Actions.SignUpActionTypes.SignUp, registerCallback, client)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function registerCallback(client, action) {
    var result, e_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, effects_1.call([client, client.postAsync], "/Account/Register", {
                        Username: action.username, Firstname: action.firstname, Lastname: action.lastname, Email: action.email, Password: action.password,
                        PhoneNumber: action.phonenumber, Afm: action.afm, Country: action.country, City: action.city,
                        Street: action.street, AptNo: action.aptno, ZipCode: action.zipcode
                    })];
            case 1:
                result = _a.sent();
                console.log(result);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.error(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}
function registerSaga(client) {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.all([
                    effects_1.call(SignUpWatcher, client),
                ])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.registerSaga = registerSaga;
//# sourceMappingURL=registerSaga.js.map