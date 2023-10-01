import { all } from 'redux-saga/effects';
import { tagSagas } from './tag/tag.sagas';

function* rootSaga() {
  yield all([tagSagas()]);
}

export default rootSaga;
