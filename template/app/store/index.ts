import { configureStore } from '@reduxjs/toolkit';
import { persistStore, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import rootReducer from './rootReducer';

export const index = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default index;
export const { dispatch } = index;
export const { getState } = index;
export const persistor = persistStore(index);
// persistor.purge();
