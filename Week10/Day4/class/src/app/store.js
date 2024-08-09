import { configureStore, combineReducers } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import usersReducer from "../features/users/usersSlice";

import { logger } from "./middleware";

const reducer = combineReducers({
  counter: counterReducer,
  usersReducer,
});

export default configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
