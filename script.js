// OpenWeatherMap API Key (Free tier)
// Note: For production, use environment variables to store API keys
const API_KEY = '8ac5c4d57ba6a4b3dfcf622700447b1e'; // Free demo key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM Elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const errorMessage = document.getElementById('errorMessage');
const loadingSpinner = document.getElementById('loadingSpinner');
const weatherInfo = document.getElementById('weatherInfo');

// Weather data elements
const cityName = document.getElementById('cityName');
const weatherIcon = document.getElementById('weatherIcon');
const temp = document.getElementById('temp');
const weatherDesc = document.getElementById('weatherDesc');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const pressure = document.getElementById('pressure');

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Load default city on page load
window.addEventListener('load', () => {
    getWeatherData('Delhi');
});

// Handle search
function handleSearch() {
    const city = cityInput.value.trim();
    
    if (city === '') {
        showError('Please enter a city name');
        return;
    }
    
    getWeatherData(city);
}

// Fetch weather data from API
async function getWeatherData(city) {
    try {
        // Show loading state
        showLoading();
        hideError();
        hideWeatherInfo();
        
        // Make API request
        const response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        
        // Check if response is ok
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Please check the spelling and try again.');
            } else if (response.status === 401) {
                throw new Error('API key error. Please check your API configuration.');
            } else {
                throw new Error('Failed to fetch weather data. Please try again later.');
            }
        }
        
        const data = await response.json();
        
        // Hide loading and display weather
        hideLoading();
        displayWeatherData(data);
        
    } catch (error) {
        hideLoading();
        showError(error.message);
        console.error('Error fetching weather data:', error);
    }
}

// Display weather data
function displayWeatherData(data) {
    // Update city name
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    
    // Update weather icon
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    weatherIcon.alt = data.weather[0].description;
    
    // Update temperature
    temp.textContent = Math.round(data.main.temp);
    
    // Update description
    weatherDesc.textContent = data.weather[0].description;
    
    // Update weather details
    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;
    pressure.textContent = `${data.main.pressure} hPa`;
    
    // Show weather info
    showWeatherInfo();
    
    // Clear input
    cityInput.value = '';
}

// UI Helper Functions
function showLoading() {
    loadingSpinner.classList.add('show');
}

function hideLoading() {
    loadingSpinner.classList.remove('show');
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    
    // Auto-hide error after 5 seconds
    setTimeout(() => {
        hideError();
    }, 5000);
}

function hideError() {
    errorMessage.classList.remove('show');
}

function showWeatherInfo() {
    weatherInfo.classList.add('show');
}

function hideWeatherInfo() {
    weatherInfo.classList.remove('show');
}
