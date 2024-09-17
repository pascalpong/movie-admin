import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Movie {
  id: number;
  title: string;
  
}

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
  endpoints: (builder) => ({
    getMovies: builder.query<any, any>({
      query: ({category, page, search}:{category: number, page: number, search: string}) => ({
        url: `movies?${category ? `category=${category}&` : ''}${page ? `page=${page}&` : ''}${search ? `search=${search}&` : ''}`,
        method: 'GET'
      })
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;