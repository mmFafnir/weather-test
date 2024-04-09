import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.openweathermap.org/",
});

const apiId = import.meta.env.VITE_API_KEY;
instance.interceptors.request.use((config) => {
  config.params = {
    appid: apiId,
    units: "metric",
  };
  return config;
});

export default instance;
