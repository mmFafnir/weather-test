import { useTypeSelector } from "@/shared/hooks/useTypeSelector";
import { CityWrapper } from "../card/CityWrapper";
import { useTypeDispatch } from "@/shared/hooks/useTypeDispatch";
import { deleteAllCities } from "@/features/weather";
import { memo } from "react";
import "./list.scss";

const CityListMemo = () => {
  const dispatch = useTypeDispatch();
  const { cities } = useTypeSelector((state) => state.weather);

  const onClearAll = () => dispatch(deleteAllCities());

  return (
    <div className="city-list">
      {cities.length > 0 && (
        <div className="city-list__clear">
          <button onClick={onClearAll}>Clear all</button>
        </div>
      )}
      <div className="city-list__content">
        {cities.map((city) => (
          <CityWrapper key={city.id} city={city} />
        ))}
        {cities.length == 0 && (
          <div className="city-list__empty">
            <p>Add a city to monitor the weather :)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const CityList = memo(CityListMemo);
