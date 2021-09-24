import api from "../lib/api";
import { loadDataSuccess, loadDataFail } from "../Modules/posts";
import { call, put, takeEvery } from "redux-saga/effects";

function* postsSaga() {
  console.log("beer data 불러오기 성공!");
  yield takeEvery("LOAD_DATA", postsSaga);
  try {
    const { data } = yield call(api.beersData);
    // console.log(data);
    yield put(loadDataSuccess(data));
  } catch (error) {
    yield put(loadDataFail(error));
  }
}

export default postsSaga;
