import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../const';
import {QueryArgs} from '../types/query-args.interface';

export const launchesApi = createApi({
  reducerPath: 'launchesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getLaunches: builder.query({
      query: () => '/launches'
    }),
    getFilteredLaunches: builder.mutation({
      query: (body: QueryArgs) => ({
        url: '/launches/query',
        method: 'POST',
        body
      })
    })
  })
});

export const {useGetLaunchesQuery, useGetFilteredLaunchesMutation} = launchesApi;
