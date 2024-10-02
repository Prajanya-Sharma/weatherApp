import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity } from "../api";

// Custom hook to access the weather context
export const useWeather = () => {
  return useContext(WeatherContext);
};

const WeatherContext = createContext(null);

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState("");

  const fetchData = async () => {
    if (searchCity) {
      const response = await getWeatherDataForCity(searchCity);
      setData(response);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        data,
        setSearchCity,
        fetchData, // Added fetchData to the value
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
