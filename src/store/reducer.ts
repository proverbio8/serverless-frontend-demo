import { combineReducers } from '@reduxjs/toolkit';
import {tagReducer} from "./tag/tag.reducer";

const rootReducer = combineReducers({
  // add your reducers here. For example:
  tag: tagReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
