import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import mobileReducer from "./mobileSlice";

const reducer = combineReducers({
  search: searchReducer,
  mobile: mobileReducer,
});

export const store = configureStore({
  reducer,
});
