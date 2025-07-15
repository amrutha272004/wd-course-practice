async function getWeather() {
  try {
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London");
    const data = await response.json();
    console.log("🌤️ Weather in London:", data.current.temp_c + "°C");
  } catch (error) {
    console.log("❌ Failed to fetch weather:", error);
  }
}

getWeather();