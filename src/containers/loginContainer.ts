import * as Actions from "../actions";
import { Login, LoginStateProps, LoginDispatchProps } from "../components/Login";
import { Dispatch, connect } from "react-redux";
import { AppState } from "../appState";
import * as Routes from "../components/routes";

const mapStateToProps = (state: AppState): LoginStateProps => ({
    isAuthenticated: state.sessionInfo.isAuthenticated,
});

const mapDispatchToProps = (dispatch: Dispatch): LoginDispatchProps => {
    return {
        login: (email : string, password :string) => dispatch(Actions.login(email, password)),
        routetoregister : () => dispatch(Actions.routeTo(Routes.registerPage)),
        routetoguest : () => dispatch(Actions.routeTo(Routes.guest)),
    };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export {
    LoginContainer,
};
