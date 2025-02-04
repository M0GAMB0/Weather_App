# ☀️ Weather Dashboard App 🌦️

This project is a weather dashboard application that fetches real-time weather data from the OpenWeather API. It provides users with current weather conditions for a searched city or their current location.  The app is built using React and leverages the Context API for state management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Approach to Solution](#approach-to-solution)
- [Future Enhancements](#future-enhancements)

## Introduction

This weather dashboard provides a clean and intuitive interface for users to quickly access current weather information.  It prioritizes user experience by offering multiple ways to input location and persistently storing the last searched city for quick access upon return. 🚀

## Features

- **Location Search:** Users can search for a city by name to get its weather information. 🔍
- **Geolocation:** Users can use their device's location to fetch weather data for their current area. 📍
- **Real-time Data:** The app fetches real-time weather data from the OpenWeather API, ensuring up-to-date information. 🔄
- **Weather Display:** Displays key weather information including temperature, humidity, weather conditions (e.g., sunny, cloudy, rainy), and an appropriate weather icon. 🌡️💧☁️☀️
- **API Polling:** Implements API polling to periodically update the weather data. 📡
- **Persistent Search:** Saves the last searched city and automatically loads its data when the user revisits the app. 💾
- **State Management:** Uses React's Context API for efficient state management. 📦
- **Responsive Design:** (If applicable - add this if you implemented responsive design) The dashboard is designed to be responsive and work well on different screen sizes.📱💻

## Technologies Used

- React
- OpenWeather API
- Context API (for state management)
- (Add any other libraries you used, e.g., `axios` for API calls, any UI libraries, etc.)

## Installation

1. Clone the repository: ```git clone https://github.com/[your-username]/[your-repo-name].git ``` ⬇
2. Navigate to the project directory: ```cd [your-repo-name]``` 
3. Install dependencies: ```npm install``` or ```yarn install```
4. Obtain an API key from OpenWeatherMap and replace the placeholder in the code.  (Explain where this placeholder is - e.g., in `src/config.js` or similar.) 🔑
5. Start the development server: ```npm start``` or ```yarn start```

## Usage

1. Open the application in your browser. 🌐
2. On the home page, you can either:
    - Enter a city name in the search bar and press Enter. ⌨️
    - Click the "Use My Location" button to use your device's geolocation. 📍
3. The dashboard will display the current weather information for the selected location. ☀️☁️🌧️

## Approach to Solution

Building this weather dashboard involved several key steps:

1. **API Integration:** I started by integrating the OpenWeather API.  I obtained an API key and used `fetch` (or `axios`) to make requests to the API endpoints for current weather data. I carefully handled API responses, including error handling. 🔌
2. **Component Development:** I created reusable React components for different parts of the UI, such as the search bar, weather display, and (if applicable) any other UI elements. This modular approach made the code more organized and maintainable. 🧩
3. **State Management with Context API:** I implemented the Context API to manage the application's state, including the current weather data, searched city, and loading state. This centralized state management simplified data flow and avoided prop drilling. 📦
4. **Geolocation:** I added the geolocation feature using the browser's Geolocation API. I handled permissions and potential errors gracefully. 📍
5. **API Polling:** I used `setInterval` (or a similar approach) to implement API polling, ensuring the weather data is updated periodically. 🔄
6. **Persistent Search:**  I used `localStorage` (or similar) to store the last searched city.  When the app loads, I check if a previously searched city exists and automatically fetch its weather data. 💾
7. **User Interface:** I focused on creating a clean and intuitive user interface. I used appropriate weather icons and displayed information in a clear and concise manner. (Mention any UI libraries or styling approaches used). ✨

## Future Enhancements

- **Forecast Data:** Display a multi-day weather forecast. 🗓️
- **Improved Styling:** Enhance the UI with better styling and visual appeal.🎨
- **Error Handling:** Implement more robust error handling for API requests and geolocation. ⚠️
- **Unit Conversion:** Allow users to switch between different units (e.g., Celsius and Fahrenheit). 🌡️
- **Accessibility:** Improve accessibility for users with disabilities. ♿
