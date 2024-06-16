const apiKey = 'cbc9a5d0cd32452d88c61731241606'; 

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    // Fetch weather data using the WeatherAPI
    const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    
    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('City not found');
                return;
            }
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const current = data.current;
    const location = data.location;
    
    weatherInfo.innerHTML = `
        <h2>${location.name}, ${location.country}</h2>
        <p>Temperature: ${current.temp_c}°C</p>
        <p>Weather: ${current.condition.text}</p>
        <p>Humidity: ${current.humidity}%</p>
        <p>Wind Speed: ${current.wind_kph} kph</p>
    `;
}

