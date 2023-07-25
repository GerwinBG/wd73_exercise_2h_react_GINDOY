import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { cartItemCountSlice } from "./cartItemCountReducer";


const rootReducer = combineReducers({
  cartItemCount: cartItemCountSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer
})