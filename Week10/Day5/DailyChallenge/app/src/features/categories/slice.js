import { createSlice, createAsyncThunk, isFulfilled, isRejected, isPending } from "@reduxjs/toolkit";
import config from "../../config/config.json";


const initialState = {
  users: [],
  status: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
  }
});


export default usersSlice.reducer;