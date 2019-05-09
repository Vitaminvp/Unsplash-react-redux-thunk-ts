import { getImage } from "../api";
import { ActionTypes } from "./unsplash";
import { Image } from "../types/API";
import {ActionCreator, Dispatch} from "redux";
import {Action} from "../types/action";

export const fetchImage = (payload: { imageId: string }):any  => {
  return async (dispatch: Dispatch) => {
    const response = await getImage(payload.imageId);
    dispatch({
      type: ActionTypes.IMAGE,
      payload: { ...response }
    });
  };
};
