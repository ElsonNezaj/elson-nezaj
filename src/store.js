import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./redux/navigation/navigationSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});
