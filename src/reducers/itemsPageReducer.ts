import { ItemsPage } from "../models/state/itemsPage";
import { initializeAppState } from '../appState';
import * as Actions from "../actions";

const itemsPageReducer = (state: ItemsPage = initializeAppState().itemsPage, action: Actions.ItemsAction): ItemsPage => {
    switch (action.type) {
        case Actions.ItemsActionTypes.SetItems:
            case Actions.ItemsActionTypes.SetItems:
                return { ...state, items: action.items };
        default:
            return state;
    }
};

export {
   itemsPageReducer,
};