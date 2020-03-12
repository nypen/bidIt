"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SessionActionTypes;
(function (SessionActionTypes) {
    SessionActionTypes["SetRequestedUrl"] = "SESSION_SET_REQUESTED_URL";
    SessionActionTypes["SetAccessToken"] = "SESSION_SET_ACCESS_TOKEN";
})(SessionActionTypes || (SessionActionTypes = {}));
exports.SessionActionTypes = SessionActionTypes;
var setRequestedUrl = function (requestedUrl) { return ({
    type: SessionActionTypes.SetRequestedUrl,
    requestedUrl: requestedUrl,
}); };
exports.setRequestedUrl = setRequestedUrl;
var setAccessToken = function (accessToken) { return ({
    type: SessionActionTypes.SetAccessToken,
    accessToken: accessToken,
}); };
exports.setAccessToken = setAccessToken;
//# sourceMappingURL=sessionActions.js.map