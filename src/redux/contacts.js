import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
    reducers: {
        // addContact: (state) => ({ ...state, data }),
        
        // delContact: (state) => (state.contacts.map(contact => contact.id !== event.target.id))
        
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

export const {  } = contactsSlice.actions;

export default contactsSlice.reducer;