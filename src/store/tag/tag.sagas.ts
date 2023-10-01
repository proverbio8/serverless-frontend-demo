import { put, call, delay, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { validateTagError, validateTagLoading, validateTagSuccess } from './tag.actions';
import {TagValidateResponse, validateTagApi} from "./tag.api";
import {ActionTypes} from "./tag.actions";

function* validateTagSaga(action: PayloadAction<string>): Generator<any> {
  try {
    yield put(validateTagLoading());
    //yield delay(5000); // wait for 5 seconds
    const response = yield call(validateTagApi, action.payload);
    yield put(validateTagSuccess(response as TagValidateResponse));
  } catch (error: any) {
    yield put(validateTagError(error?.response?.data?.message || error?.message as string));
  }
}

export function* tagSagas() {
  yield takeEvery(ActionTypes.VALIDATE_TAG, validateTagSaga);
}
