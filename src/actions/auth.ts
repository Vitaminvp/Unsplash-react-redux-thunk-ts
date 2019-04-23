import {Dispatch} from "redux";
import {fetchToken, FetchtokenResponse} from "../api";
import {Action} from "../types/action";

export enum AUTH_ACTION_TYPES {
    TOKEN = '@auth/token'
}

const dispatchToken = (payload: FetchtokenResponse) => {
    type: AUTH_ACTION_TYPES.TOKEN,
    payload
};

export const setToken = (code:string) => async (dispatch:Dispatch<any>)  => {
    const responseData = await fetchToken(code);
    dispatch(dispatchToken(responseData))
};