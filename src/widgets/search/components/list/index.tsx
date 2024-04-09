import { TypeCity } from "@/shared/types/type.city";
import { FC, useEffect, useState } from "react";
import { useTypeSelector } from "@/shared/hooks/useTypeSelector";
import { useTypeDispatch } from "@/shared/hooks/useTypeDispatch";
import { deleteCity, setCity } from "@/features/weather";
import { getCountryImageSrc } from "@/shared/helpers/getImageSrc";

import "./list.scss";

interface IListCardState {
  city: TypeCity;
}

const ListCard: FC<IListCardState> = ({ city }) => {
  const dispatch = useTypeDispatch();
  const { cities } = useTypeSelector((state) => state.weather);
  const isExist = cities.some((prevCity) => prevCity.id === city.id);
  const onToggleCity = () => {
    if (isExist) return dispatch(deleteCity(city.id));
    dispatch(setCity(city));
  };

  return (
    <button
      onClick={onToggleCity}
      className={`search-list-card ${isExist ? "search-list-card--exist" : ""}`}
    >
      <p className="search-list-card__title">
        <span>
          {city.name}, {city.country}
        </span>
        <img
          src={getCountryImageSrc(city.country)}
          alt={`${city.name}, ${city.country}`}
        />
      </p>
      <p>
        {city.lat}, {city.lon}
      </p>
    </button>
  );
};

interface IState {
  cities: TypeCity[];
}
export const SearchList: FC<IState> = ({ cities }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (cities.length == 0) return setOpen(false);
    setOpen(true);

    const onClickOutSide = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".search")) setOpen(true);
      else setOpen(false);
    };

    document.addEventListener("click", onClickOutSide);

    return () => document.removeEventListener("click", onClickOutSide);
  }, [cities]);

  return (
    <div className={`search-list ${open ? "open" : ""}`}>
      {cities.map((city) => (
        <ListCard key={city.id} city={city} />
      ))}
    </div>
  );
};
