import { splitArrayToSubarray } from "@/shared/helpers/splitArrayToSubarrays";
import { IWeather, IWeatherForecast } from "@/shared/types/type.weather";
import dayjs from "dayjs";

const checkTime = (date: string): boolean => {
  const time = dayjs(date).format("HH:mm:ss");
  if (time === "12:00:00" || time === "21:00:00") return true;
  return false;
};

export const mapWeatherData = (data: IWeatherForecast) => {
  const res = {
    ...data,
    list: splitArrayToSubarray<IWeather>(
      2,
      data.list.filter((forecast) => checkTime(forecast.dt_txt))
    ),
  };
  return res;
};
