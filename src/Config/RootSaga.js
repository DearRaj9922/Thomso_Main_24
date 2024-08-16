import { all } from "redux-saga/effects";
import userSaga from "../components/User/UserSaga";

function* RootSaga() {
  yield all([userSaga()]);
}

export { RootSaga };
