import { createAction } from '@reduxjs/toolkit';
import { TagValidateResponse } from './tag.api';

// Action types
export enum ActionTypes {
  VALIDATE_TAG = 'VALIDATE_TAG',
  VALIDATE_TAG_LOADING = 'VALIDATE_TAG_LOADING',
  VALIDATE_TAG_ERROR = 'VALIDATE_TAG_ERROR',
  VALIDATE_TAG_CLEAR = 'VALIDATE_TAG_CLEAR',
  VALIDATE_TAG_SUCCESS = 'VALIDATE_TAG_SUCCESS',
}

// Action creators
export const validateTag = createAction<string>(ActionTypes.VALIDATE_TAG);
export const validateTagLoading = createAction(
  ActionTypes.VALIDATE_TAG_LOADING,
);
export const validateTagSuccess = createAction<TagValidateResponse>(
  ActionTypes.VALIDATE_TAG_SUCCESS,
);
export const validateTagError = createAction<string>(
  ActionTypes.VALIDATE_TAG_ERROR,
);
export const validateTagClear = createAction(ActionTypes.VALIDATE_TAG_CLEAR);
