# Weather App - Mini Project

A beautiful and simple weather application built with HTML, CSS, and JavaScript for B.Tech students.

## 🌟 Features

- **Real-time Weather Data**: Get current weather information for any city
- **Beautiful UI**: Modern glassmorphism design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Weather Details**: Shows temperature, feels like, humidity, wind speed, and pressure
- **Easy to Use**: Simple search interface with error handling

## 🚀 How to Use

1. **Open the App**: Simply open `index.html` in your web browser
2. **Search for a City**: Type any city name in the search box
3. **View Weather**: Click the "Search" button or press Enter to see the weather

## 📁 Project Structure

```
Weather App/
├── index.html      # Main HTML file
├── style.css       # Styling and animations
├── script.js       # JavaScript logic and API integration
└── README.md       # Project documentation
```

## 🔑 API Information

This app uses the **OpenWeatherMap API** to fetch weather data.

- **API Used**: OpenWeatherMap Current Weather API
- **API Key**: Included in the code (free demo key)
- **Get Your Own Key**: Visit [OpenWeatherMap](https://openweathermap.org/api) to get a free API key

### How to Replace API Key (Optional)

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. Open `script.js`
4. Replace the `API_KEY` value with your own key:
   ```javascript
   const API_KEY = 'your_api_key_here';
   ```

## 💡 Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with modern features
  - Glassmorphism effects
  - CSS Grid and Flexbox
  - Smooth animations and transitions
  - Gradient backgrounds
- **JavaScript (ES6+)**: Logic and functionality
  - Async/Await for API calls
  - DOM manipulation
  - Event handling
  - Error handling

## 🎨 Design Features

- **Glassmorphism**: Modern frosted glass effect
- **Gradient Backgrounds**: Beautiful color transitions
- **Smooth Animations**: Floating icons, fade-in effects
- **Hover Effects**: Interactive elements with visual feedback
- **Responsive Layout**: Adapts to all screen sizes

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with all features
- **Tablet**: Optimized spacing and sizing
- **Mobile**: Single column layout for better readability

## 🛠️ Customization

### Change Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --bg-gradient: linear-gradient(to bottom right, #1a1a2e, #16213e, #0f3460);
    /* Add your own colors */
}
```

### Change Default City

Edit the default city in `script.js`:

```javascript
window.addEventListener('load', () => {
    getWeatherData('Delhi'); // Change 'Delhi' to your city
});
```

## 📝 Learning Objectives

This project helps you learn:

1. **HTML Structure**: Semantic HTML and proper document structure
2. **CSS Styling**: Modern CSS techniques and responsive design
3. **JavaScript**: API integration, async programming, and DOM manipulation
4. **API Integration**: How to work with third-party APIs
5. **Error Handling**: Proper error handling and user feedback
6. **UI/UX Design**: Creating beautiful and user-friendly interfaces

## 🎓 Perfect for B.Tech Students

This project is ideal for:
- Web development mini projects
- Learning HTML, CSS, and JavaScript
- Understanding API integration
- Portfolio building
- College assignments

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📄 License

This project is free to use for educational purposes.

## 🤝 Contributing

Feel free to modify and enhance this project for your learning!

## 📞 Support

If you face any issues:
1. Check your internet connection
2. Verify the API key is working
3. Check browser console for errors
4. Make sure you're entering valid city names

---

**Happy Coding! 🚀**

Made with ❤️ for B.Tech Students
