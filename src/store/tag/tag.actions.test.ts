import {
  validateTagLoading,
  validateTagSuccess,
  validateTagError,
  validateTagClear,
  validateTag,
  ActionTypes,
} from './tag.actions';

describe('actions', () => {
  it('should create an action to start validate tag', () => {
    const action = validateTag('my_tag');
    expect(action.type).toEqual(ActionTypes.VALIDATE_TAG);
    expect(action.payload).toEqual('my_tag');
  });

  it('should create an action to start loading', () => {
    const expectedAction = {
      type: ActionTypes.VALIDATE_TAG_LOADING,
    };
    expect(validateTagLoading()).toEqual(expectedAction);
  });

  it('should create an action for success', () => {
    const data = { message: 'Tag is valid' };
    const expectedAction = {
      type: ActionTypes.VALIDATE_TAG_SUCCESS,
      payload: data,
    };
    expect(validateTagSuccess(data)).toEqual(expectedAction);
  });

  it('should create an action for error', () => {
    const error = 'Invalid Tag';
    const expectedAction = {
      type: ActionTypes.VALIDATE_TAG_ERROR,
      payload: error,
    };
    expect(validateTagError(error)).toEqual(expectedAction);
  });

  it('returns correct action', () => {
    const action = validateTagClear();
    expect(action.type).toEqual(ActionTypes.VALIDATE_TAG_CLEAR);
  });
});
