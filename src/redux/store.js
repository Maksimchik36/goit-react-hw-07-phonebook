import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter';    // filterReducer возможно  вместо filterSlice
// import { contacts } from './contacts';

export const store = configureStore({
    reducer: {
        filter: filterSlice,   // filterReducer возможно  вместо filterSlice
        // contacts,
  },
})