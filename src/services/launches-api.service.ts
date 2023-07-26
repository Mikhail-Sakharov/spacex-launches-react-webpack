import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ApiRoutes, BASE_URL} from '../const';
import {QueryArgs} from '../types/query-args.interface';

export const launchesApi = createApi({
  reducerPath: 'launchesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getLaunches: builder.query({
      query: () => `${ApiRoutes.Launches}`
    }),
    getFilteredLaunches: builder.mutation({
      query: (body: QueryArgs) => ({
        url: `${ApiRoutes.Launches}${ApiRoutes.Query}`,
        method: 'POST',
        body
      })
    })
  })
});

export const {useGetLaunchesQuery, useGetFilteredLaunchesMutation} = launchesApi;
