import {Action} from "../types/action";
import {ActionTypes} from "../actions/unsplash";
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
    searchInput: "",
    filterInput: ""
};

export const unsplash = (state: UnsplashState = INITIAL_STATE, action: Action<ActionTypes, any>) => {

    switch(action.type) {
        case ActionTypes.FETCH:
            const items = [...state.items, ...action.payload.items];
            return { ...state, ...action.payload, items };

        case ActionTypes.FILTER:
            return { ...state, filterInput: action.payload };

        default:
            return state;
    }

};
