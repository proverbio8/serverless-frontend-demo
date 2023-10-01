import { put, call, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  validateTagError,
  validateTagLoading,
  validateTagSuccess,
} from './tag.actions';
import { TagValidateResponse, validateTagApi } from './tag.api';
import { ActionTypes } from './tag.actions';
import { AxiosError } from 'axios';

export function* validateTagSaga(action: PayloadAction<string>): Generator {
  try {
    yield put(validateTagLoading());
    const response = yield call(validateTagApi, action.payload);
    yield put(validateTagSuccess(response as TagValidateResponse));
  } catch (error) {
    const axiosError = error as AxiosError<TagValidateResponse>;
    yield put(
      validateTagError(
        axiosError?.response?.data?.message || (axiosError?.message as string),
      ),
    );
  }
}

export function* tagSagas() {
  yield takeEvery(ActionTypes.VALIDATE_TAG, validateTagSaga);
}
