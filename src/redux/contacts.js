import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:[]
  // [
  //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  // ],
}


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
    reducers: {
      // деструктуризируем payload из action и переименовываем его в contact
        addContact: (state, {payload: contact}) => {state.value = [...state.value, contact] }
        
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

export const { addContact } = contactsSlice.actions;

export default contactsSlice.reducer;