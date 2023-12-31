import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ApiRoutes, BASE_URL} from '../const';
import {Rocket} from '../types/rocket.interface';

export const rocketsApi = createApi({
  reducerPath: 'rocketsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getRocket: builder.query<Rocket, string>({
      query: (id: string) => `${ApiRoutes.Rockets}/${id}`
    })
  })
});

export const {useGetRocketQuery} = rocketsApi;
