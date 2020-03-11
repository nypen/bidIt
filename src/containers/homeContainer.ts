import * as Actions from "../actions";
import { Dispatch, connect } from "react-redux";
import { AppState } from "../appState";
import { HomeStateProps, HomeDispatchProps, Home } from '../components/Home';
import * as Routes from "../components/routes";

const mapStateToProps = (state: AppState): HomeStateProps => ({
    items: state.itemsPage.items,
    user: state.userState.user,
});

const mapDispatchToProps = (dispatch: Dispatch): HomeDispatchProps => {
    return {
        getData: () => dispatch(Actions.getItems()),
        viewitembutton: () => dispatch(Actions.routeTo(Routes.viewitem)),
        routetologin: () => dispatch(Actions.routeTo(Routes.loginPage)),
    };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export {
    HomeContainer,
};