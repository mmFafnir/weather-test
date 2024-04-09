import axios from "@/shared/core/axios";
import { TypeCity } from "@/shared/types/type.city";

export const fetchCitiesSearch = async (
  search: string
): Promise<TypeCity[]> => {
  try {
    const { data } = await axios.get(`/geo/1.0/direct?q=${search}&limit=5`);
    return data.map((city: TypeCity) => {
      city["id"] = `${city.country} ${city.lat} ${city.lon}`;
      return city;
    });
  } catch (error) {
    throw Error();
  }
};
