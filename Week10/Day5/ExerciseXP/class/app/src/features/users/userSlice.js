import { createSlice, createAsyncThunk, isFulfilled, isRejected, isPending } from "@reduxjs/toolkit";
import config from "../../config/config.json";


export const STATUS = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
}


export const fetchAllUsers = createAsyncThunk(
  "users/fetchAll",
  async () => {
    return await fetch(config.USERS_API).then(data => data.json());
  },
)

const initialState = {
  users: [],
  status: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.pending, (state) => {
      state.status = STATUS.PENDING;
    })

    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      // state.users = action.payload.map((user) => {
      //   return {
      //     ...user,
      //   };
      // });
      state.status = STATUS.FULFILLED;
    })

    builder.addCase(fetchAllUsers.rejected, (state, action) => {
      alert("Internal client error. Please try again later.")
      state.status = STATUS.REJECTED;
      console.log(action.error);
    })
  }
});


export default usersSlice.reducer;