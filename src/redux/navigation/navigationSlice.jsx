import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedNavigation: "main",
  sideBarState: true,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setSelectedNavigation: (state, action) => {
      state.selectedNavigation = action.payload;
    },
    triggerSideBar: (state, action) => {
      state.sideBarState = action.payload;
    },
  },
});

export const { setSelectedNavigation, triggerSideBar } =
  navigationSlice.actions;
export default navigationSlice.reducer;
