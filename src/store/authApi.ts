import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
    endpoints: (builder) => ({
      login: builder.mutation<any, any>({
        query: (body) => ({
          url: '/login',
          method: 'POST',
          body
        }),
      }),
    }),
})

export const { useLoginMutation } = authApi