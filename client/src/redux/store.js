import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

const store = configureStore(
  { reducer: reducer },
  applyMiddleware(thunkMiddleware),
);

export default store;
