import { combineReducers } from "redux";
import { AppState } from "../appState";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { sessionReducer } from "./sessionReducer";
import { itemsPageReducer } from './itemsPageReducer';
import { userReducer } from './userReducer';


const rootReducer = (history: History<any>) => combineReducers<AppState>({
    router: connectRouter(history),
    sessionInfo: sessionReducer,
    itemsPage: itemsPageReducer,
    userState : userReducer,
});

export default rootReducer;