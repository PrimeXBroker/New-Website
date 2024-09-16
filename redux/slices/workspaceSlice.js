import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tokenData: {},
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setTokenData: (state, action) => {
      state.tokenData = action.payload;
    },
  },
});

export const { setTokenData } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
