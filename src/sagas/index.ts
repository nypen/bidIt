import { all, call } from "redux-saga/effects";
import { AxiosHttpClient } from '../axiosClient';
import { sessionSaga } from './sessionSaga';
import { itemSaga } from './itemSaga';
import { registerSaga } from './registerSaga';

function* rootSaga(client: AxiosHttpClient) {
    yield all([
        call(sessionSaga, client),
        call(itemSaga, client),
        call(registerSaga,client),
    ]);
}
export {
    rootSaga,
};
