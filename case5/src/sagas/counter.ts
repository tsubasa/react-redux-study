import { delay, put, all, takeEvery } from 'redux-saga/effects';

import { actionTypes } from '../actions/counter';

function* increment() {
  // 1秒待つ
  yield delay(1000);
  // 加算する
  yield put({ type: actionTypes.INCREMENT_COUNTER });
}

export function* counterSagas() {
  yield all([takeEvery(actionTypes.ASYNC_INCREMENT_COUNTER, increment)]);
}
