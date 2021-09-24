import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import posts from "./posts";
import reorder from "./reorder";
import postsSaga from "../lib/utils";

//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";

enableES5();

const rootReducer = combineReducers({
  posts,
  reorder,
});

//wathcer saga
export function* rootSaga() {
  yield all([postsSaga()]);
}

export default rootReducer;
