import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter';  
import contactsReducer from './contacts'; 
// для работы persist с localStorage
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const contactsPersistConfig = {
  key: 'contacts',
  version: 1,
  storage,
}

const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);


export const store = configureStore({
    reducer: {
        filter: filterReducer,   
        contacts: persistedContactsReducer,
        },
        
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})


export const persistor = persistStore(store);
