import { RouterState } from "connected-react-router";
import { SessionInfo, initializeSessionInfo, ItemsPage, initializeItemsPage } from "./models";
import { UserState, initializeUserState } from './models/state/userState';

interface AppState {
    sessionInfo: SessionInfo;
    router?: RouterState;
    itemsPage: ItemsPage;
    userState : UserState;
}

const initializeAppState = (): AppState => ({
    sessionInfo: initializeSessionInfo(),
    itemsPage: initializeItemsPage(),
    userState : initializeUserState(),

});

export {
    AppState,
    initializeAppState,
};
