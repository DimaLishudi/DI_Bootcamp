import { createSlice, createAsyncThunk, isFulfilled, isRejected, isPending } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  isLoading: false,
};

const TIMEOUT = 2 * 1000;

export const ageUpAsync = createAsyncThunk(
  "age/upAsync",
  (amount) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(parseInt(amount)), TIMEOUT)
    })
  },
)

export const ageDownAsync = createAsyncThunk(
  "age/downAsync",
  (amount) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(-parseInt(amount)), TIMEOUT)
    })
  },
)

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  // I used addMatcher instead of addCase here
  // to practice with redux toolkit
  // plus, it makes code much cleaner here
  extraReducers: (builder) => {
    builder.addMatcher(isPending, (state) => {
      state.isLoading = true;
    })
    builder.addMatcher(isFulfilled, (state, action) => {
      state.count += action.payload;
      state.isLoading = false;
    })
    builder.addMatcher(isRejected, (state, action) => {
      // Maybe some error message?
      alert("Internal client error. Please try again later.")
      state.isLoading = false;
      console.log(action.error);
    })
  }
});

export default counterSlice.reducer;

