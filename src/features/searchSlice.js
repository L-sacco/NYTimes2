import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  searchValues: [{ id: 1, text: "" }],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addValue: (state, action) => {
      const value = {
        id: nanoid(),
        text: action.payload,
      };
      state.searchValues.push(value);
    },
  },
});

export const { addValue } = searchSlice.actions;
export default searchSlice.reducer;
