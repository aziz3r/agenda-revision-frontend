import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Examen } from '../types/Examen';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api/' }),
  tagTypes: ['Examen'],
  endpoints: (builder) => ({
    getExamens: builder.query<{ data: Examen[] }, void>({
      query: () => 'examens?populate=*', // pour inclure matière et sessions si Strapi
      providesTags: ['Examen'],
    }),
    addExamen: builder.mutation<Examen, Partial<Examen>>({
      query: (newExamen) => ({
        url: 'examens',
        method: 'POST',
        body: { data: newExamen },
      }),
      invalidatesTags: ['Examen'],
    }),
    deleteExamen: builder.mutation<void, number>({
      query: (id) => ({
        url: `examens/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Examen'],
    }),
    updateExamen: builder.mutation<Examen, { id: number; data: Partial<Examen> }>({
      query: ({ id, data }) => ({
        url: `examens/${id}`,
        method: 'PUT',
        body: { data },
      }),
      invalidatesTags: ['Examen'],
    }),
  }),
});

export const {
  useGetExamensQuery,
  useAddExamenMutation,
  useDeleteExamenMutation,
  useUpdateExamenMutation,
} = api;
