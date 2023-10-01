import { tagReducer } from './tag.reducer';
import * as actions from './tag.actions';

describe('tagReducer', () => {
  it('should return the initial state', () => {
    expect(tagReducer(undefined, { type: '' })).toEqual({
      loading: false,
      data: null,
      error: null,
    });
  });

  it('should handle VALIDATE_TAG_LOADING', () => {
    const action = {
      type: actions.validateTagLoading.type,
    };
    expect(tagReducer(undefined, action)).toEqual({
      loading: true,
      data: null,
      error: null,
    });
  });

  it('should handle VALIDATE_TAG_SUCCESS', () => {
    const action = {
      type: actions.validateTagSuccess.type,
      payload: 'tagData',
    };
    expect(tagReducer(undefined, action)).toEqual({
      loading: false,
      data: action.payload,
      error: null,
    });
  });

  it('should handle VALIDATE_TAG_ERROR', () => {
    const action = {
      type: actions.validateTagError.type,
      payload: 'Error',
    };
    expect(tagReducer(undefined, action)).toEqual({
      loading: false,
      data: null,
      error: action.payload,
    });
  });

  it('should handle VALIDATE_TAG_CLEAR', () => {
    const action = {
      type: actions.validateTagClear.type,
    };
    expect(tagReducer(undefined, action)).toEqual({
      loading: false,
      data: null,
      error: null,
    });
  });
});
