"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Qs = require("qs");
var AxiosHttpClient = /** @class */ (function () {
    function AxiosHttpClient(axios) {
        this.axios = axios;
    }
    AxiosHttpClient.prototype.getAsync = function (path, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.get(path, { params: params })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AxiosHttpClient.prototype.postAsync = function (path, body, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.post(path, body, { params: params })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AxiosHttpClient.prototype.putAsync = function (path, body, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.put(path, body, { params: params })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AxiosHttpClient.prototype.deleteAsync = function (path, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.delete(path, { params: params })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AxiosHttpClient.prototype.setConfig = function (config) {
        this.axios.defaults.baseURL = config.basePath || this.axios.defaults.baseURL;
        this.axios.defaults.headers.common["authorization"] = "Bearer " + config.authToken;
        this.axios.defaults.paramsSerializer = function (params) { return Qs.stringify(params, { allowDots: true, skipNulls: true }); };
    };
    return AxiosHttpClient;
}());
exports.AxiosHttpClient = AxiosHttpClient;
//# sourceMappingURL=axiosClient.js.map