import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";
import useDebounce from "@/shared/hooks/useDebounce";
import { SearchList } from "../list";
import { useEffect, useState } from "react";
import { TypeCity } from "@/shared/types/type.city";
import { fetchCitiesSearch } from "../api/fetchCitiesSearch";
import "./search.scss";

export const Search = () => {
  const [cities, setCities] = useState<TypeCity[]>([]);
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);

  const [error, setError] = useState(false);

  const onClear = () => {
    setSearch("");
    setCities([]);
  };

  useEffect(() => {
    if (debounceSearch)
      fetchCitiesSearch(debounceSearch)
        .then((res) => {
          setCities(res);
        })
        .catch(() => {
          setError(true);
        });
    setCities([]);
  }, [debounceSearch]);

  useEffect(() => {
    const onPressEsc = (e: KeyboardEvent) => {
      if (e.key == "Escape") onClear();
    };

    document.addEventListener("keyup", onPressEsc);
    return () => document.removeEventListener("keyup", onPressEsc);
  }, []);
  return (
    <div className="search">
      <p className="search__title">Search by city:</p>
      <div className="search__flex">
        <Input
          value={search}
          className="search__input"
          onChange={(value) => setSearch(value)}
        />
        <Button
          onClick={onClear}
          disabled={search.trim().length == 0}
          className={`search__button ${search ? "search__button--active" : ""}`}
        >
          Clear
        </Button>
      </div>
      {error && <p className="search__error">Server error, try again later</p>}
      <SearchList cities={cities} />
    </div>
  );
};
