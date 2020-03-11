import * as Actions from "../actions";
import { Dispatch, connect } from "react-redux";
import { AppState } from "../appState";
import { SignUp, SignUpStateProps, SignUpDispatchProps } from "../components/Register";
import * as Routes from "../components/routes";

const mapStateToProps = (state: AppState): SignUpStateProps => ({
});

const mapDispatchToProps = (dispatch: Dispatch): SignUpDispatchProps => {
    return {
        register: (username:string,firstname:string,lastname:string,email: string, password: string,
            phonenumber:string,afm:string,country:string,city:string,street:string,aptno:string,zipcode:string) => 
            dispatch(Actions.register(username,firstname,lastname,email, password,phonenumber,afm,country,city,street,aptno,zipcode)), 
            registerbutton: () => dispatch(Actions.routeTo(Routes.loginPage)),//actions
    };
};

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export {
    SignUpContainer,
};