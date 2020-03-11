import * as Routes from "../components/routes";
import * as Actions from "../actions";
import { initializeAppState } from "../appState";
import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router';
import { SessionInfo } from '../models';

const sessionReducer = (state: SessionInfo = initializeAppState().sessionInfo, action: Actions.SessionAction | LocationChangeAction): SessionInfo => {
    switch (action.type) {
        case Actions.SessionActionTypes.SetRequestedUrl:
            switch (action.requestedUrl) {
                case Routes.loginPage:
                    return state;
                default:
                    return { ...state, requestedUrl: action.requestedUrl };
            }
        case Actions.SessionActionTypes.SetAccessToken:
            return { ...state, accessToken: action.accessToken }
        case LOCATION_CHANGE:
            switch (action.payload.location.pathname) {
                case Routes.loginPage:
                    return state;
                default:
                    return { ...state, requestedUrl: action.payload.location.pathname + action.payload.location.search };
            }
        default:
            return state;
    }
};

export {
    sessionReducer,
};
