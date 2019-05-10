import { getImage } from "../api";
import { ActionTypes } from "./unsplash";
import { FetchTokenResponse, Image } from "../types/API";
import { Action, ActionCreator, AnyAction, Dispatch } from "redux";
import { Action as ActionType } from "../types/action";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { UnsplashState } from "../reducers/unsplash";
import { AuthAction } from "./auth";

export const fetchImage = (payload: { imageId: string }): any => {
  return async (dispatch: Dispatch) => {
    const response = await getImage(payload.imageId);
    dispatch({
      type: ActionTypes.IMAGE,
      payload: { ...response }
    });
  };
};
