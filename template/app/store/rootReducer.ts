import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { combineReducers, Action } from '@reduxjs/toolkit';
import { RootState } from 'types';

import { resetApp, appReducer } from 'features/app/slice';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const projectReducer = combineReducers<RootState>({
  app: appReducer,
});

const rootReducer = (
  state: RootState | undefined,
  action: Action,
): ReturnType<typeof projectReducer> => {
  if (action.type === resetApp.pending.type) {
    state = {} as RootState;
  }

  return projectReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
