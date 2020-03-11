import { AxiosHttpClient } from "../axiosClient";
import { takeEvery, call, all, put } from 'redux-saga/effects';
import * as Actions from "../actions";
import { Item} from '../models';


function* getItemsWatcher(client: AxiosHttpClient) {
    yield takeEvery(Actions.ItemsActionTypes.GetItems, getItems, client);
    yield takeEvery(Actions.ItemsActionTypes.PostItem, postItem, client);
}

function* getItems(client: AxiosHttpClient) {
    const items: Array<Item> = yield call([client, client.getAsync] , "/Items");

    console.log(items); 
    
    yield put(Actions.setItems(items));
}

function* postItem(client: AxiosHttpClient , action: Actions.PostItemAction) {
    const uri:string = "/Sellers/" +action.userId+"/Items";
    const response = yield call([client, client.postAsync] , uri, {
         Name: action.name, Description: action.description,Country: action.country,
         Duration: action.duration,Firstbid: action.firstbid,BuyPrice: action.buyprice});
    console.log(response); 
}


function* itemSaga(client: AxiosHttpClient){
    yield all([
        call(getItemsWatcher,client)
    ]);
}

export{
    itemSaga,
}
