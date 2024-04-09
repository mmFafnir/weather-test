import { weatherSlice } from "@/features/weather";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
});
