import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CounterType = {
  counter: number;
};
const initialState: CounterType = { count: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByvalue: (state, action: PayloadAction<number>) => {
      state.count = state.count - action.payload;
    },
  },
});

export const { increment, decrement, incrementByvalue } = counterSlice.actions;

export default counterSlice.reducer;
