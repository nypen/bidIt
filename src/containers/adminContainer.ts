import * as Actions from "../actions";
import { Dispatch, connect } from "react-redux";
import { AppState } from "../appState";
import { Admin, AdminStateProps, AdminDispatchProps } from "../components/Admin";
import * as Routes from "../components/routes";

const mapStateToProps = (state: AppState): AdminStateProps => ({
});

const mapDispatchToProps = (dispatch: Dispatch): AdminDispatchProps => {
    return {
        routetologin: () => dispatch(Actions.routeTo(Routes.loginPage)),//actions
    };
};

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export {
    AdminContainer,
};