import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter';  
import contactsReducer from './contacts';  

export const store = configureStore({
    reducer: {
        filter: filterReducer,   
        contacts: contactsReducer,
  },
})