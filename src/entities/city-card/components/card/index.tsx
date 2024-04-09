import { FC, ReactNode } from "react";
import { IWeather } from "@/shared/types/type.weather";
import { TypeCity } from "@/shared/types/type.city";
import dayjs from "dayjs";
import {
  getCountryImageSrc,
  getWeatherImageSrc,
} from "@/shared/helpers/getImageSrc";

import Loader from "@/shared/components/Loader";
import "./card.scss";

interface IProps {
  forecasts: IWeather[][];
  city: TypeCity;
  currentForecast: IWeather | null;
  actions?: ReactNode;
  loading: boolean;
}
export const CityCard: FC<IProps> = ({
  actions,
  city,
  currentForecast,
  loading,
  forecasts,
}) => {
  return (
    <div className="city-card">
      {loading && <Loader />}
      {currentForecast && (
        <div className="city-card__content">
          <div>
            <p className="city-card__time">
              {dayjs(currentForecast.dt_txt).format("MMM DD")}
            </p>
            <h3>
              <img
                src={getCountryImageSrc(city.country)}
                alt={`${city.name}, ${city.country}`}
              />
              <span>
                {city.name}, {city.country}{" "}
              </span>
            </h3>
            <p className="city-card__temp">
              <img
                src={getWeatherImageSrc(currentForecast.weather[0].icon)}
                alt={`${city.name} ${currentForecast.main.temp}°C`}
              />
              <span>{Math.floor(currentForecast.main.temp)}°C</span>
            </p>
            <p className="city-card__desk">
              Feels like {Math.floor(currentForecast.main.feels_like)}°C.{" "}
              {currentForecast.weather[0]?.description || ""}
            </p>
          </div>
          {actions && <div className="city-card__actions">{actions}</div>}
        </div>
      )}
      {forecasts.length > 0 && (
        <div className="city-card__table">
          <p>5-day forecast</p>
          {forecasts.map((forecast) => (
            <div key={forecast[0].dt_txt}>
              <p>{dayjs(forecast[0].dt_txt).format("ddd, MMM DD")}</p>
              <p>
                {Math.floor(forecast[0].main.temp)} /{" "}
                {Math.floor(forecast[1].main.temp)}°C
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
