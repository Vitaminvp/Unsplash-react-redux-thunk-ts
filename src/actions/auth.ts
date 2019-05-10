import { Dispatch, Action, ActionCreator, AnyAction } from "redux";
import { fetchToken } from "../api";
import { Action as ActionType } from "../types/action";
import { FetchTokenResponse } from "../types/API";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

export enum AUTH_ACTION_TYPES {
  TOKEN = "@auth/token"
}

export type AuthAction = ActionType<AUTH_ACTION_TYPES, { [key: string]: any }>;

const dispatchToken = (payload: FetchTokenResponse) => ({
  type: AUTH_ACTION_TYPES.TOKEN,
  payload
});


export const setToken = (code: string) => async (
  dispatch: Dispatch
) => {
  const responseData = await fetchToken(code);
  dispatch(dispatchToken(responseData));
};
