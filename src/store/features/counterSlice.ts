import { createSlice } from "@reduxjs/toolkit";

type initState = {
  count: number;
}

const initialState: initState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    clearCount: (state) => {
      state.count = 0
    }
  }
})

export const { increment, decrement, clearCount } = counterSlice.actions;

export default counterSlice.reducer;