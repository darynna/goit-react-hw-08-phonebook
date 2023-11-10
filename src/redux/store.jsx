// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './reducer';
// import { authsReducer } from './authReducer';

// export const store = configureStore({
//   reducer: {
//     phonebook: contactsReducer,
//     auth: authsReducer
//   },
// });


import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducer';
import { authsReducer } from './authReducer';

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
const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const rootReducer = combineReducers({
  phonebook: contactsReducer,
  auth: persistReducer(authConfig, authsReducer),
  
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);