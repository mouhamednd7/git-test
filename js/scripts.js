// Function to fetch weather data
async function fetchWeather() {
  try {
    const apiKey = "124accd40ef3fe252234a84ebf8aef7f";
    const city = "New York"; // Change this to your desired city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    const response = await fetch(url);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("Error fetching weather:", error);
    if (error.response) {
      console.error("API Error:", error.response.data);
    }
  }
}

// Function to display weather data
function displayWeather(weather) {
  try {
    // Check if the necessary properties are available in the weather object
    if (
      weather &&
      weather.weather &&
      weather.weather[0] &&
      weather.weather[0].icon
    ) {
      const icon = weather.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

      document.getElementById("weather-icon").src = iconUrl;
      document.getElementById(
        "weather-temp"
      ).innerHTML = `${weather.main.temp}&deg;F`;
      document.getElementById("weather-description").innerHTML =
        weather.weather[0].description;
    } else {
      console.error("Weather data structure is not as expected:", weather);
    }
  } catch (error) {
    console.error("An error occurred while displaying weather:", error);
  }
}

// Call the fetchWeather function when the script is loaded
fetchWeather();
