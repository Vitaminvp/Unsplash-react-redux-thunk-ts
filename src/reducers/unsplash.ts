import {Action} from "../types/action";
import {ActionTypes} from "../actions";

export const unsplash = (state: any={}, action: Action<ActionTypes.FETCH, string>) => {

    switch(action.type) {
        case ActionTypes.FETCH:
            return { ...state, text: action.payload };
        default:
            return state;
    }

};
