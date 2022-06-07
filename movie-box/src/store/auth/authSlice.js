import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../services/auth";

export const userLogin = createAsyncThunk("auth/userLogin", async (payload) => {
  try {
    const res = await login(payload);
    return res;
  } catch (error) {
    throw new Error(error?.message ?? "Login Failed");
  }
});

export const userRegister = createAsyncThunk("auth/userRegister", async (payload) => {
  try {
    const res = await register(payload);
    return res;
  } catch (error) {
    throw new Error(error?.message ?? "Register failed");
  }
});

// export const userEdit = createAsyncThunk("auth/userEdit", async (payload) => {
//   try {
//     const res = await editProfile(payload);
//     return res;
//   } catch (error) {
//     throw new Error(error?.message ?? "Edit Profile failed");
//   }
// });

const initialState = {
  user: null,
  loading: false,
  isError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.user = null;
      state.isError = null;
    },
    [userLogin.fulfilled]: (state, action) => {
      console.log(state, "state");
      console.log(action, "action");
      state.loading = false;
      state.user = action.payload;
      state.isError = null;
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
    },
    [userLogin.rejected]: (state, action) => {
      state.loading = false;
      state.user = null;
      state.isError = action.error.message;
    },
    [userRegister.pending]: (state) => {
      state.loading = true;
      state.user = null;
      state.isError = null;
    },
    [userRegister.fulfilled]: (state, action) => {
      console.log(state, "state");
      console.log(action, "action");
      state.loading = false;
      state.user = action.payload;
      state.isError = null;
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
    },
    [userRegister.rejected]: (state, action) => {
      state.loading = false;
      state.user = null;
      state.isError = action.error.message;
    },
    // [userEdit.pending]: (state) => {
    //   state.loading = true;
    //   state.user = null;
    //   state.isError = null;
    // },
    // [userEdit.fulfilled]: (state, action) => {
    //   console.log(state, "state");
    //   console.log(action, "action");
    //   state.loading = false;
    //   state.user = action.payload;
    //   state.isError = null;
    //   localStorage.setItem("user", JSON.stringify(action.payload));
    // },
    // [userEdit.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.user = null;
    //   state.isError = action.error.message;
    // },
  },
});

const { action, reducer } = authSlice;
export default reducer;
