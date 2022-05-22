import { configureStore } from '@reduxjs/toolkit';
import combineReducer from './Reducers/combineReducer';

const rootReducer = (state, action) => {
  if (action.type === 'isLogin/logout') {
    state = undefined;
  }
  return combineReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
