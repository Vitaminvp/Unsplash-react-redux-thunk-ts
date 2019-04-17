import {Action} from "../types/action";

export enum ActionTypes {
    FETCH
}

const fetchItems: ()=> Action<ActionTypes.FETCH, string> = () => {
    return ({
        type: ActionTypes.FETCH,
        payload: 'some text'
    });
};