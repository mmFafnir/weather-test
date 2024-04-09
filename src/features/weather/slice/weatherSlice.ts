import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "@/shared/helpers/localstorage";
import { EnumStatus } from "@/shared/types/status";
import { TypeCity } from "@/shared/types/type.city";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

interface IState {
  cities: TypeCity[];
  status: EnumStatus;
}

const initialState: IState = {
  cities: getLocalStorage<TypeCity[]>("weather") || [],
  status: EnumStatus.LOADING,
};

const slice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<TypeCity>) => {
      state.cities = [action.payload, ...state.cities];
      setLocalStorage("weather", state.cities);
    },
    deleteCity: (state, action: PayloadAction<string>) => {
      state.cities = state.cities.filter((city) => city.id !== action.payload);
      setLocalStorage("weather", state.cities);
    },
    deleteAllCities: (state) => {
      state.cities = [];
      removeLocalStorage("weather");
    },
  },
});

export const { setCity, deleteCity, deleteAllCities } = slice.actions;
export const weatherSlice = slice.reducer;
