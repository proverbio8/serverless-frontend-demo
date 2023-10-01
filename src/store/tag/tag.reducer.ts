import { createReducer } from '@reduxjs/toolkit';
import {
  validateTagClear,
  validateTagError,
  validateTagLoading,
  validateTagSuccess,
} from './tag.actions';
import { TagValidateResponse } from './tag.api';

const initialState = {
  loading: false,
  data: null as TagValidateResponse | null,
  error: null as string | null,
};

export const tagReducer = createReducer(initialState, builder => {
  builder
    .addCase(validateTagLoading, state => {
      state.loading = true;
      state.error = null;
      state.data = null;
    })
    .addCase(validateTagError, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    })
    .addCase(validateTagSuccess, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    })
    .addCase(validateTagClear, state => {
      state.data = null;
      state.error = null;
    });
});
