export default async function getWeatherInfo(city) {
  try {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "eabb2d0c0de1472c052714730caa7cb8";

    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();

    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      feelsLike: jsonResponse.main.feels_like,
      humidity: jsonResponse.main.humidity,
      weather: jsonResponse.weather[0].description,
    };

    console.log(result);
    return result;
  } catch (err) {
    throw err;
  }
}
