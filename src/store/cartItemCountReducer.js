import { createSlice } from "@reduxjs/toolkit";


export const cartItemCountSlice = createSlice({
  name: 'cartItemCount',
  initialState: 0,
  reducers: {
    addToCart: (state, action) => {
      console.log(state);
      return state + action.payload
    },
  }
})

export const { addToCart }  = cartItemCountSlice.actions