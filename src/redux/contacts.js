import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
    reducers: {
      // деструктуризируем payload из action и переименовываем его в contact
      addContact: (state, { payload: contact }) => { state.value = [...state.value, contact] },
      // деструктуризируем payload из action и переименовываем его в id
      delContact: (state, {payload: id}) => {state.value = state.value.filter(contact => contact.id !== id) }
  },
})

export const { addContact, delContact } = contactsSlice.actions;

export default contactsSlice.reducer;