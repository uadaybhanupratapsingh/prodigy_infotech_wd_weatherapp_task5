function fetchWeather() {
    const locationInput = document.getElementById('location').value;
    const apiKey = '2ba27b3f83c8e301cdd958b40c667fe9'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('An error occurred while fetching weather data. Please try again later.');
      });
  }
  
  function displayWeather(data) {
    const weatherContainer = document.getElementById('weather');
  
    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  
    const weatherHtml = `
      <h2>${cityName}</h2>
      <p>Temperature: ${temperature} °C</p>
      <p>Weather: ${weatherDescription}</p>
      <img src="${iconUrl}" alt="Weather Icon">
    `;
  
    weatherContainer.innerHTML = weatherHtml;
  }
  