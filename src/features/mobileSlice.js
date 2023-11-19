import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  mobile: false,
};

export const mobileSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      const value = action.payload;
      state.mobile = value;
    },
  },
});

export const { changeValue } = mobileSlice.actions;
export default mobileSlice.reducer;
