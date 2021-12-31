import { Action, configureStore, Store, ThunkAction } from '@reduxjs/toolkit';
import { uiSlice } from './reducers';

export const reducer = {
  ui: uiSlice.reducer,
};

export const actions = {
  auth: uiSlice.actions,
};

export const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppActions = Action<typeof actions>;
export type AppStore = Store<AppState, AppActions>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
