import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedNavigation: "main",
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setSelectedNavigation: (state, action) => {
      state.selectedNavigation = action.payload;
    },
  },
});

export const { setSelectedNavigation } = navigationSlice.actions;
export default navigationSlice.reducer;
