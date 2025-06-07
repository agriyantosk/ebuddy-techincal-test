import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk, fetchUserThunk } from "./thunks";
import { IUser } from "../../../backend-repo/entities/user";

interface UserState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Login failed";
      })

      .addCase(fetchUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Fetch failed";
      });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
