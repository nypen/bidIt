"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
require("./index.css");
var configureStore_1 = require("./configureStore");
var rootContainer_1 = require("./containers/rootContainer");
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/styles");
ReactDOM.render(React.createElement(styles_1.ThemeProvider, { theme: {} },
    React.createElement(react_redux_1.Provider, { store: configureStore_1.store },
        React.createElement(rootContainer_1.RootContainer, { history: configureStore_1.history }))), document.getElementById("app"));
if (module.hot) {
    module.hot.accept();
}
//# sourceMappingURL=index.js.map