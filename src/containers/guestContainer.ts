import * as Routes from "../components/routes";
import * as Actions from "../actions";
import { Dispatch, connect } from "react-redux";
import { AppState } from '../appState';
import { GuestStateProps, GuestDispatchProps, Guest } from '../components/Guest';

const mapStateToProps = (state: AppState): GuestStateProps => ({
    items: state.itemsPage.items,
});

const mapDispatchToProps = (dispatch: Dispatch): GuestDispatchProps => {
    return {
        getData: () => dispatch(Actions.getItems()),
    };
};

const GuestContainer = connect(mapStateToProps, mapDispatchToProps)(Guest);

export {
    GuestContainer,
};