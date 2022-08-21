import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import filterReducer from './filterSlice';  
import { contactApi } from './contactSlice'; 


export const store = configureStore({
    reducer: {
        filter: filterReducer,   
        [contactApi.reducerPath]: contactApi.reducer,
        },
         
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        contactApi.middleware,
        // [contactApi.reducerPath]: contactApi.reducer,

    ]
})


setupListeners(store.dispatch);












// import { configureStore } from '@reduxjs/toolkit';
// import filterReducer from './filterSlice';  
// import contactsReducer from './contactsSlice'; 
// // для работы persist с localStorage
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'


// const contactsPersistConfig = {
//   key: 'contacts',
//   version: 1,
//   storage,
// }

// const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);


// export const store = configureStore({
//     reducer: {
//         filter: filterReducer,   
//         contacts: contactsReducer,
//         },
        
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// })


// export const persistor = persistStore(store);

