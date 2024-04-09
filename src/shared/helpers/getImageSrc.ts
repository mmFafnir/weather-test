export const getCountryImageSrc = (code: string) => {
  return `https://flagsapi.com/${code}/flat/64.png`;
};

export const getWeatherImageSrc = (icon: string) => {
  return `http://openweathermap.org/img/w/${icon}.png`;
};
