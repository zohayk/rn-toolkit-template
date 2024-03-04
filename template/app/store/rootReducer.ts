import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { combineReducers, Action, Reducer } from '@reduxjs/toolkit';
import { RootState } from 'types';

import { resetApp, appReducer } from 'features/app/slice';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['user'],
};

const projectReducer = combineReducers({
  app: appReducer as Reducer<RootState['app']>,
});

const rootReducer = (state: unknown, action: Action): ReturnType<typeof projectReducer> => {
  if (action.type === resetApp.pending.type) {
    state = {} as RootState;
  }
  return projectReducer(state as RootState, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
