import {Action} from "../types/action";
import {ActionTypes} from "../actions";

const INITIAL_STATE={
    text: 'some text'
};

export const unsplash = (state: any = INITIAL_STATE, action: Action<ActionTypes.FETCH, string>) => {

    switch(action.type) {
        case ActionTypes.FETCH:
            return { ...state, text: action.payload };
        default:
            return state;
    }

};
