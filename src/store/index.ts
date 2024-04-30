import { configureStore } from '@reduxjs/toolkit';
import movieDetailsReducer from './movieDetailsSlice';

const store = configureStore({
  reducer: {
    movieDetails: movieDetailsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;