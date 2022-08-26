import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const contactApi = createApi({
  // базовые настройки
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6301f05be71700618a4029e4.mockapi.io/api/v1/' }),
  tagTypes: ['Contact'],                // ключи в cache
  endpoints: (builder) => ({

    // "под капотом" преобразуется в useFetchContactsQuery
    fetchContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contact'], // Used by mutation endpoints. Used by query endpoints. Determines which 'tag' is attached to the cached data returned by the query
    }),

    // "под капотом" преобразуется в useCreateContactMutation
    createContact: builder.mutation({
      query: newContact => ({
        url: 'contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],  // Determines which cached data should be either re-fetched or removed from the cache. Expects the same shapes as providesTags.
    }),

    // "под капотом" преобразуется в useDeleteContactMutation
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