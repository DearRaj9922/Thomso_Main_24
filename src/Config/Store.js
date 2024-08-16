import { createStore, applyMiddleware, compose } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import createSagaMiddleware from "redux-saga";
import { RootSaga } from "./RootSaga";
import {loadState,saveState} from "./localstorage";

let state = RootReducer;
let sagaMiddleware = createSagaMiddleware({
  onError: (err) => {
    alert("There is some problem. Please check console!");
    console.error("ERROR", err);
  },
});
const persistedState = loadState()
const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;
const Store = createStore(
  state,
  persistedState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
Store.subscribe(() => {
    saveState(Store.getState());
});
sagaMiddleware.run(RootSaga);

export { Store };
