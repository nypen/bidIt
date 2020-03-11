import { AxiosHttpClient } from "../axiosClient";
import { takeEvery, call, all, put } from 'redux-saga/effects';
import * as Actions from "../actions";

function* SignUpWatcher(client: AxiosHttpClient) {
    yield takeEvery(Actions.SignUpActionTypes.SignUp, registerCallback, client);
}

function* registerCallback(client: AxiosHttpClient, action: Actions.SignUpAction) {
    try {
    const result: any = yield call([client, client.postAsync] , "/Account/Register", { 
        Username : action.username,Firstname : action.firstname,Lastname:action.lastname,Email:action.email, Password:action.password,
        PhoneNumber:action.phonenumber,Afm: action.afm,Country: action.country,City: action.city,
        Street: action.street,AptNo: action.aptno,ZipCode: action.zipcode});

    console.log(result); 
    }catch (e) {
        console.error(e);
    }
}

function* registerSaga(client: AxiosHttpClient) {
    yield all([
        call(SignUpWatcher, client),
    ]);
}

export {
    registerSaga,
};