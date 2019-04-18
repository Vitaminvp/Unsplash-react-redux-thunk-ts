import {Action} from "../types/action";

export enum ActionTypes {
    FETCH
}

export const fetchItems = (payload?:string):any  => { //Action<ActionTypes.FETCH, string>
    return (dispatch:any) => {
        dispatch({
            type: ActionTypes.FETCH,
            payload: payload || "рыба"
        });
    };
};