import {configureStore} from '@reduxjs/toolkit';
import {launchesApi} from '../services/launches-api.service';

export const store = configureStore({
  reducer: {
    [launchesApi.reducerPath]: launchesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(launchesApi.middleware)
});
