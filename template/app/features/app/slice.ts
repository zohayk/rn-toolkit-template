import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppTypes, ChangeAppInfoProps } from './types';
import * as AppActions from './actions';

const initialState: AppTypes = {
  initialScreen: 'Auth',

  accessToken: '',
  refreshToken: '',
};

const appSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAppInfo: (state: AppTypes, { payload }: PayloadAction<AppTypes>) => ({
      ...state,
      ...payload,
    }),
    changeAppInfo: (state: AppTypes, { payload }: PayloadAction<ChangeAppInfoProps>) => ({
      ...state,
      [payload.key]: payload.value,
    }),
  },
});

export const { resetApp } = AppActions;
export const { setAppInfo, changeAppInfo } = appSlice.actions;
export const appReducer = appSlice.reducer;
