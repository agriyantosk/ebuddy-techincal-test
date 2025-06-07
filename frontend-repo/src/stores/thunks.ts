// store/thunks/userThunks.ts
import { getUser } from "@/apis/userApi";
import { login } from "@/lib/firebaseAuth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface LoginArgs {
  email: string;
  password: string;
}

export const loginUserThunk = createAsyncThunk(
  "user/login",
  async ({ email, password }: LoginArgs, thunkAPI) => {
    const result = await login(email, password);
    if (!result) throw new Error("Login failed");

    const { user, token } = result;
    Cookies.set("firebaseToken", token);
    return { userData: user, token };
  }
);

export const fetchUserThunk = createAsyncThunk(
  "user/fetchUser",
  async (_, thunkAPI) => {
    try {
      const data = await getUser();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
