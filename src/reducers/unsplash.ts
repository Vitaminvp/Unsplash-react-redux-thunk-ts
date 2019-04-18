import {Action} from "../types/action";
import {ActionTypes} from "../actions";
import {Image} from "../types/API";



interface UnsplashState {
    items: Array<Image>;
    total: number;
    totalPages: number;
    currentPage: number;
}

const INITIAL_STATE={
    items: [],
    total: 0,
    totalPages: 0,
    currentPage: 0,
};

export const unsplash = (state: UnsplashState = INITIAL_STATE, action: Action<ActionTypes.FETCH, any>) => {

    switch(action.type) {
        case ActionTypes.FETCH:
            return { ...state, ...action.payload };
        default:
            return state;
    }

};
