import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import moviesReducer from "./movies/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer,
  },
});
