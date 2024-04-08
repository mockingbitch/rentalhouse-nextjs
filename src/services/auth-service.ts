import { LoginResponse } from '@/app/(authentication)/login/login';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_DOMAIN
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, void>({
      query: () => 'login',
    }),
    getAuthData: builder.query<LoginResponse, { token: string }>({
      query: ({ token }) => ({
        url: 'profile',
        // this is the default but I'm leaving it here for reference
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useGetAuthDataQuery } = authApi;