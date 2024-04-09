import axios from "@/shared/core/axios";
import { IWeatherForecastMap } from "@/shared/types/type.weather";
import { mapWeatherData } from "../helpers/mapWeatherData";

export const fetchCityWeather = async (
  lat: number,
  lon: number
): Promise<IWeatherForecastMap> => {
  const { data } = await axios.get(`/data/2.5/forecast?lat=${lat}&lon=${lon}`);
  return mapWeatherData(data);
};
