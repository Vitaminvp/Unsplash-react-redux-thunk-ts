import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers  from "./reducers";
import thunk from "redux-thunk";

//@ts-ignore
const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
    reducers,
    composedEnhancer()
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


