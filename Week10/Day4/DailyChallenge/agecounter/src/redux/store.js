import { configureStore, combineReducers } from "@reduxjs/toolkit";

import counterReducer from "../components/counterSlice"

const reducer = combineReducers({
  counter: counterReducer,
});

export default configureStore({
  reducer,
});
