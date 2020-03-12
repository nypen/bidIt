"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Routes = require("./routes");
var React = require("react");
var connected_react_router_1 = require("connected-react-router");
var react_router_1 = require("react-router");
var loginContainer_1 = require("../containers/loginContainer");
var containers_1 = require("../containers");
var registerContainer_1 = require("../containers/registerContainer");
var Root = /** @class */ (function (_super) {
    tslib_1.__extends(Root, _super);
    function Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Root.prototype.UNSAFE_componentWillMount = function () {
        var location = this.props.history && this.props.history.location
            ? this.props.history.location.pathname + this.props.history.location.search
            : "/";
        this.props.initialize(location);
    };
    Root.prototype.render = function () {
        return (React.createElement(connected_react_router_1.ConnectedRouter, { history: this.props.history },
            React.createElement(react_router_1.Switch, null,
                React.createElement(react_router_1.Route, { path: Routes.home, render: function () { return React.createElement(containers_1.HomeContainer, null); } }),
                React.createElement(react_router_1.Route, { path: Routes.registerPage, render: function () { return React.createElement(registerContainer_1.SignUpContainer, null); } }),
                React.createElement(react_router_1.Route, { path: Routes.guest, render: function () { return React.createElement(containers_1.GuestContainer, null); } }),
                React.createElement(react_router_1.Route, { path: Routes.loginPage, render: function () { return React.createElement(loginContainer_1.LoginContainer, null); } }),
                React.createElement(react_router_1.Route, { path: Routes.root, render: function () { return React.createElement(loginContainer_1.LoginContainer, null); } }))));
    };
    return Root;
}(React.Component));
exports.Root = Root;
var AuthenticatedRoute = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticatedRoute, _super);
    function AuthenticatedRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthenticatedRoute.prototype.render = function () {
        var _this = this;
        return (React.createElement(react_router_1.Route, { exact: this.props.exact, path: this.props.path, render: function () {
                if (_this.props.isAuthenticated) {
                    return _this.props.component;
                }
                else {
                    return React.createElement(react_router_1.Redirect, { to: _this.props.redirect });
                }
            } }));
    };
    return AuthenticatedRoute;
}(React.Component));
exports.AuthenticatedRoute = AuthenticatedRoute;
//# sourceMappingURL=root.js.map