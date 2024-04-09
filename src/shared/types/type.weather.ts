type TypeCoord = {
  lat: number;
  lon: number;
};
type TypeCity = {
  coord: TypeCoord;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
};

export interface IWeather {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  dt_txt: string;
}

export interface IWeatherForecast {
  city: TypeCity[];
  list: IWeather[];
}

export interface IWeatherForecastMap extends Omit<IWeatherForecast, "list"> {
  list: IWeather[][];
}
