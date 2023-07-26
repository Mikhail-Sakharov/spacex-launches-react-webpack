import {configureStore} from '@reduxjs/toolkit';
import {launchesApi} from '../services/launches-api.service';
import {rocketsApi} from '../services/rockets-api.service';

export const store = configureStore({
  reducer: {
    [launchesApi.reducerPath]: launchesApi.reducer,
    [rocketsApi.reducerPath]: rocketsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(launchesApi.middleware)
    .concat(rocketsApi.middleware)
});
