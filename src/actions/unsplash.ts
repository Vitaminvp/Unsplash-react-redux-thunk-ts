import {Action} from "../types/action";
import getImages from "../api";

export enum ActionTypes {
    FETCH = '@unsplash/fetch'
}

export const fetchItems = (payload: {searchInput: string, currentPage: number}):any  => { //Action<ActionTypes.FETCH, string>
    return async (dispatch:any) => {
        const response = await getImages(payload.searchInput, payload.currentPage);
        dispatch({
            type: ActionTypes.FETCH,
            payload: response
        });
    };
};