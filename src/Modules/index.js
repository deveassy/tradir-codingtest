import { combineReducers } from "redux";
import { call, put, takeEvery } from "redux-saga/effects";
import api from "../lib/api";
import dataReducer from "./dataReducers";
import allActions from "./actions";

//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";

enableES5();

const rootReducer = combineReducers({
  dataReducer,
});

// export default rootReducer;
export default rootReducer;

function* workerSaga() {
  console.log("beer data 불러오기 성공!");
  try {
    const { data } = yield call(api.beersData);
    console.log(data);
    yield put(allActions.loadDataSuccess(data));
  } catch (error) {
    yield put(allActions.loadDataFail(error));
  }
}

//wathcer saga
export function* rootSaga() {
  // yield all([workerSaga]);
  yield takeEvery("LOAD_DATA", workerSaga);
}
