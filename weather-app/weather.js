document.addEventListener('DOMContentLoaded', () => {
    // IMPORTANT: Replace with your actual WeatherAPI.com API Key
    const API_KEY = '86c7cc0d3b5e47828df81124253107'; 

    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-button');
    const weatherDisplay = document.getElementById('weather-display');
    const errorMessage = document.getElementById('error-message');

    const locationDiv = weatherDisplay.querySelector('.location');
    const temperatureDiv = weatherDisplay.querySelector('.temperature');
    const conditionDiv = weatherDisplay.querySelector('.condition');
    const humiditySpan = weatherDisplay.querySelector('.humidity span');
    const windSpeedSpan = weatherDisplay.querySelector('.wind-speed span');

    // Function to fetch weather data
    async function getWeatherData(city) {
        // Clear previous display and error messages
        weatherDisplay.style.display = 'none';
        errorMessage.style.display = 'none';

        if (!city) {
            errorMessage.textContent = 'Please enter a city name.';
            errorMessage.style.display = 'block';
            return;
        }

        try {
            // WeatherAPI.com current weather endpoint
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
            
            // Check if the response was successful
            if (!response.ok) {
                // If response is not OK, throw an error with the status text
                const errorData = await response.json();
                throw new Error(errorData.error.message || 'City not found or API error.');
            }

            const data = await response.json();
            displayWeatherData(data); // Call function to display data
        } catch (error) {
            console.error('Error fetching weather data:', error);
            errorMessage.textContent = `Could not get weather for "${city}". ${error.message}`;
            errorMessage.style.display = 'block';
        }
    }

    // Function to display weather data
    function displayWeatherData(data) {
        // Check if essential data exists
        if (!data || !data.location || !data.current) {
            errorMessage.textContent = 'Invalid weather data received.';
            errorMessage.style.display = 'block';
            return;
        }

        locationDiv.textContent = `${data.location.name}, ${data.location.country}`;
        temperatureDiv.textContent = `${data.current.temp_c}°C / ${data.current.temp_f}°F`;
        conditionDiv.textContent = data.current.condition.text;
        humiditySpan.textContent = `${data.current.humidity}%`;
        windSpeedSpan.textContent = `${data.current.wind_kph} kph / ${data.current.wind_mph} mph`;

        weatherDisplay.style.display = 'block'; // Show the weather display
    }

    // Event listeners
    searchButton.addEventListener('click', () => {
        getWeatherData(cityInput.value.trim()); // Trim whitespace from input
    });

    cityInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            getWeatherData(cityInput.value.trim());
        }
    });

    // Optional: Fetch weather for a default city on load
    getWeatherData('London'); // You can change this to your preferred default city
});