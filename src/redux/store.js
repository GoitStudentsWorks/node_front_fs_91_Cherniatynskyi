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
import { FilterSlice } from './filterSlice';
import { authSlice } from './auth/authSlice';
import { boardReducer } from './board/boardSlice';
import { columnReducer } from './column/columnSlice';
import { cardReducer } from './card/cardSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'tokenExpiration'],
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
    filter: FilterSlice.reducer,
    auth: persistedAuthReducer,
    boards: boardReducer,
    columns: columnReducer,
    cards: cardReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
