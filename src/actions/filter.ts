import { ActionTypes } from "./unsplash";

export const filterActionCreator = (payload: {
  filterInput: string;
  sortingParam: string;
}) => ({
  type: ActionTypes.FILTER,
  payload: payload
});
