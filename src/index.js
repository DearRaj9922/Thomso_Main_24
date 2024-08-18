import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import {Store} from "./Config/Store";
import axios from 'axios'
const history = createBrowserHistory();
axios.defaults.headers.common.Authorization = `${
    localStorage.getItem("token") === null
        ? ``
        : `Bearer ${localStorage.getItem("token")}`
}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <App history={history}/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
