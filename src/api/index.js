const baseURL = "https://api.weatherapi.com/v1/current.json?key=64328e30b240435e983182718240210";

export const getWeatherDataForCity = async (city) => {
  try {
    const response = await fetch(`${baseURL}&q=${city}&aqi=no`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
