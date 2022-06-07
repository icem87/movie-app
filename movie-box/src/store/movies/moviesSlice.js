import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllGenre, fetchAllMovies, fetchGenre } from "../../services/movie";

export const getMovies = createAsyncThunk("movies/getMovies", async (payload) => {
  try {
    const res = await fetchAllMovies();
    return res;
  } catch (error) {
    throw new Error(error?.message ?? "Get movies failed");
  }
});

export const getGenres = createAsyncThunk("movies/getGenre", async () => {
  try {
    const res = await fetchGenre();
    // console.log(genre, page, "contoh");
    return res;
  } catch (error) {
    throw new Error(error?.message ?? "Get genre failed");
  }
});

export const getAllGenres = createAsyncThunk("movies/getAllGenre", async () => {
  try {
    const res = await fetchAllGenre();
    return res;
  } catch (error) {
    throw new Error(error?.message ?? "Get genre failed");
  }
});

const initialState = {
  movies: [],
  loading: false,
  isError: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.loading = true;
      state.movies = [];
      state.isError = null;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      state.isError = null;
    },
    [getMovies.rejected]: (state, action) => {
      state.loading = false;
      state.movies = [];
      state.isError = action.error.message;
    },

    [getGenres.pending]: (state) => {
      state.loading = true;
      state.genres = [];
      state.isError = null;
    },
    [getGenres.fulfilled]: (state, action) => {
      state.loading = false;
      state.genres = action.payload;
      state.isError = null;
    },
    [getGenres.rejected]: (state, action) => {
      state.loading = false;
      state.genres = [];
      state.isError = action.error.message;
    },

    [getAllGenres.pending]: (state) => {
      state.loading = true;
      state.allGenres = [];
      state.isError = null;
    },
    [getAllGenres.fulfilled]: (state, action) => {
      state.loading = false;
      state.allGenres = action.payload;
      state.isError = null;
    },
    [getAllGenres.rejected]: (state, action) => {
      state.loading = false;
      state.allGenres = [];
      state.isError = action.error.message;
    },
  },
});

const { action, reducer } = moviesSlice;
export default reducer;
