import * as Actions from "../actions";
import { Root, RootDispatchProps, RootStateProps } from "../components/root";
import { connect } from "react-redux";
import { AppState } from "../appState";
import { Dispatch } from "redux";

const mapStateToProps = (state: AppState): RootStateProps => {
    return {
        isAuthenticated: state.sessionInfo.isAuthenticated,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): RootDispatchProps => {
    return {
        initialize: (requestedUrl: string) => dispatch(Actions.setRequestedUrl(requestedUrl)),
    };
};

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root);

export {
    RootContainer,
};
