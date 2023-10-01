import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { validateTagApi, TAGS_VALIDATE_PATH } from './tag.api';
import {
  ActionTypes,
  validateTagError,
  validateTagLoading,
  validateTagSuccess,
} from './tag.actions';
import { validateTagSaga } from './tag.sagas';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

it('Validates tag successfully', () => {
  const mockTagResponse = { message: 'Valid tag' };

  mock.onPost(TAGS_VALIDATE_PATH).reply(200, mockTagResponse);

  return expectSaga(validateTagSaga, {
    payload: 'validTag',
    type: ActionTypes.VALIDATE_TAG,
  })
    .put(validateTagLoading())
    .provide([
      // provide for 'call' effect
      [call(validateTagApi, 'validTag'), mockTagResponse],
    ])
    .put(validateTagSuccess(mockTagResponse))
    .run();
});

it('Handles error in tag validation', () => {
  const error = new Error('Unknown error');

  mock.onPost(TAGS_VALIDATE_PATH).reply(400, error);

  return expectSaga(validateTagSaga, {
    payload: 'text is required',
    type: ActionTypes.VALIDATE_TAG,
  })
    .put(validateTagLoading())
    .provide([
      [call(validateTagApi, 'text is required'), Promise.reject(error)],
    ])
    .put(validateTagError(error.message))
    .run();
});
