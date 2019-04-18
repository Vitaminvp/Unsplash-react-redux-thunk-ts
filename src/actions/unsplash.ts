import {Action} from "../types/action";

export enum ActionTypes {
    FETCH
}

export const fetchItems = (payload?:string):Action<ActionTypes.FETCH, string>  => {
    return ({
        type: ActionTypes.FETCH,
        payload: payload || "рыба"
    });
};