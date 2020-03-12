"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var userState_1 = require("./models/state/userState");
var initializeAppState = function () { return ({
    sessionInfo: models_1.initializeSessionInfo(),
    itemsPage: models_1.initializeItemsPage(),
    userState: userState_1.initializeUserState(),
}); };
exports.initializeAppState = initializeAppState;
//# sourceMappingURL=appState.js.map