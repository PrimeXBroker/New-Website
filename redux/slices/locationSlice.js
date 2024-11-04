import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
