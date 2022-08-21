import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6301f05be71700618a4029e4.mockapi.io/api/v1/' }),
  tagTypes: ['Contact'],                // ключи в cache
  endpoints: (builder) => ({

    fetchContacts: builder.query({
      query: () => 'contacts',
      providesTags: 'Contact', // Used by mutation endpoints. Used by query endpoints. Determines which 'tag' is attached to the cached data returned by the query
    }),

    createContact: builder.mutation({
      query: newContact => ({
        url: 'contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],  // Determines which cached data should be either re-fetched or removed from the cache. Expects the same shapes as providesTags.
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    })
  }),
})


export const { useFetchContactsQuery, useCreateContactMutation, useDeleteContactMutation } = contactApi;














// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: [],
// }


// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//     reducers: {
//       // деструктуризируем payload из action и переименовываем его в contact
//       addContact: (state, { payload: contact }) => { state.value = [...state.value, contact] },
//       // деструктуризируем payload из action и переименовываем его в id
//       delContact: (state, {payload: id}) => {state.value = state.value.filter(contact => contact.id !== id) }
//   },
// })

// export const { addContact, delContact } = contactsSlice.actions;

// export default contactsSlice.reducer;