import { FC, memo, useEffect, useState } from "react";
import { CityCard } from "@/entities/city-card";
import { DeleteButton } from "@/features/weather";
import { TypeCity } from "@/shared/types/type.city";
import { fetchCityWeather } from "../../api/fetchCityWeather";
import { IWeather } from "@/shared/types/type.weather";

interface ICityWrapperProps {
  city: TypeCity;
}
const CityWrapperMemo: FC<ICityWrapperProps> = ({ city }) => {
  const [currentForecast, setCurrentForecast] = useState<IWeather | null>(null);
  const [forecasts, setForecasts] = useState<IWeather[][]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchCityWeather(city.lat, city.lon)
      .then((res) => {
        setCurrentForecast(res.list[0][0] || null);
        setForecasts(res.list);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <CityCard
      loading={loading}
      forecasts={forecasts}
      currentForecast={currentForecast}
      city={city}
      actions={<DeleteButton id={city.id} />}
    />
  );
};

export const CityWrapper = memo(CityWrapperMemo);
