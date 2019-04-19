import {ActionTypes} from "./unsplash";

export const filterActionCreator = (filterInput: string):any  => {
    return (dispatch:any) => {
        dispatch({
            type: ActionTypes.FILTER,
            payload: filterInput
        });
    };
};