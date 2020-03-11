import { UserState} from "../models/state/userState";
import * as Actions from "../actions";
import { initializeAppState } from '../appState';

const userReducer = (state: UserState = initializeAppState().userState, action: Actions.UserAction): UserState => {
    switch (action.type) {
        case Actions.UserActionTypes.SetUser:
            case Actions.UserActionTypes.SetUser:
                return { ...state, user: action.user };
        default:
            return state;
    }
};

export {
    userReducer,
 };