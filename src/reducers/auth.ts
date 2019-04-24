import {Action} from "../types/action";
import {ActionTypes} from "../actions/unsplash";
import {Image} from "../types/API";
import {Sort} from "../Components/searchForm";
import {AUTH_ACTION_TYPES} from "../actions/auth";

interface authState {
    isAuthenticated: boolean;
    token: string

}

const INITIAL_STATE = {
    isAuthenticated: false,
    token: ''
};

export const auth = (state: authState = INITIAL_STATE, action: Action<AUTH_ACTION_TYPES, any>) => {
    switch(action.type) {
        case AUTH_ACTION_TYPES.TOKEN:
            return {...state, token: action.payload};
        default:
            return state;
    }
}