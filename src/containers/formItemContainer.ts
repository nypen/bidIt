import * as Actions from "../actions";
import { Dispatch, connect } from "react-redux";
import { AppState } from "../appState";
import { FormItem, FormItemStateProps, FormItemDispatchProps } from "../components/FormItem";
import * as Routes from "../components/routes";

const mapStateToProps = (state: AppState): FormItemStateProps => ({
    user : state.userState.user,
});

const mapDispatchToProps = (dispatch: Dispatch): FormItemDispatchProps => {
    return {
        postitem: (userId:string,name: string, description: string,country:string
            ,duration:string,firstbid:string,buyprice?: string ) => dispatch(Actions.postItem(userId,name, description,country
                ,duration,firstbid,buyprice)), //actions
        routetohome: () => dispatch(Actions.routeTo(Routes.home)),//actions

    };
};

const FormItemContainer = connect(mapStateToProps, mapDispatchToProps)(FormItem);

export {
    FormItemContainer,
};