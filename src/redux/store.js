import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { ModalSlice } from './modalSlice';
import { authReducer, authSlice } from './auth/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['access_token'],
};

const persistedContactsReducer = persistReducer(
  persistConfig,
  authSlice.reducer
); // ще немає

export const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
    auth_token: persistedContactsReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
