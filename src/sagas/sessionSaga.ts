import * as Routes from "../components/routes";
import * as Actions from "../actions";
import { all, call, put, takeEvery, select } from "redux-saga/effects";
import { AxiosHttpClient } from '../axiosClient';
import { AppState } from '../appState';
import { User } from '../models';

function* LoginWatcher(client: AxiosHttpClient) {
    yield takeEvery(Actions.LoginActionTypes.Login, loginCallback, client);
}

function* loginCallback(client: AxiosHttpClient, action: Actions.LoginAction) {
    try {
        const result: any = yield call([client, client.postAsync] , "/Account/Login", { Email: action.email, Password: action.password });
        const authToken: string = result.item1;
        client.setConfig({authToken});
        const user: User = result.item2;
        yield put(Actions.setAccessToken(authToken));
        console.log({user});
        yield put(Actions.setUser(user));
        const requestedUrl = yield select((state: AppState) => state.sessionInfo.requestedUrl);
        if(requestedUrl!==null && requestedUrl!==Routes.root){
            yield put(Actions.routeTo(requestedUrl))
        }else{
             yield put(Actions.routeTo(Routes.home));
            }
    } catch (e) {
        console.error(e);
    }
}

function* sessionSaga(client: AxiosHttpClient) {
    yield all([
        call(LoginWatcher, client),
    ]);
}

export {
    sessionSaga,
};
