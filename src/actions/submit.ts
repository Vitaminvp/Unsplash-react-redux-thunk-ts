import { getImages } from "../api";
import { ActionTypes } from "./unsplash";
import { Dispatch } from "redux";
import { Image } from "../types/API";

export const fetchInitItems = (payload: {
  searchInput: string;
  currentPage: number;
}): any => {
  return async (dispatch: Dispatch) => {
    const response = await getImages(payload.searchInput, payload.currentPage);
    dispatch({
      type: ActionTypes.SUBMIT,
      payload: {
        ...response,
        searchInput: payload.searchInput,
        currentPage: payload.currentPage
      }
    });
  };
};
