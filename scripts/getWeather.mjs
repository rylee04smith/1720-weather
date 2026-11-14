// export function to change park name and background image
export function type(name, image) {
    document.querySelector("#park-name").innerHTML = name;
    document.body.style.backgroundImage = `url(images/${image})`;
}

// export async function for current weather
export async function getCurrentWeather(lat, lon, parkName) {
    const apiKey = "af6c345d89cedecc3375970aed85acba";
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        displayWeather(data, parkName);
    } catch (error) {
        console.error("Error fetching current weather:", error);
        const display = document.querySelector("#show-here");
        if (display) {
            display.innerHTML = "Failed to load weather data.";
        }
    }
}

// internal function to display the current park weather info
function displayWeather(current, parkName) {
    const display = document.querySelector("#show-here");
    
    if (!current) {
        display.innerHTML = "No weather data available.";
        return;
    }

    const iconUrl = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
    const description = current.weather[0].description;
    const temp = Math.round(current.main.temp);
    const tempMin = Math.round(current.main.temp_min);
    const tempMax = Math.round(current.main.temp_max);
    const windSpeed = Math.round(current.wind.speed);
    const sunrise = convert(current.sys.sunrise);
    const sunset = convert(current.sys.sunset);

    display.innerHTML = `
        <div class="weather-info">
            <h2>${parkName}</h2>
            <img src="${iconUrl}" alt="${description}" width="100" height="100">
            <p class="description">${description}</p>
            <p>Temperature: ${temp}°F</p>
            <p>High: ${tempMax}°F / Low: ${tempMin}°F</p>
            <p>Wind Speed: ${windSpeed} mph</p>
            <p>Sunrise: ${sunrise} AM</p>
            <p>Sunset: ${sunset} PM</p>
        </div>
    `;
}

// internal function used to convert time
function convert(ts) {
    const sunTime = new Date(ts * 1000);
    let h = sunTime.getHours();
    const m = sunTime.getMinutes().toString().padStart(2, '0');
    
    if (h === 0) {
        h = 12;
    } else if (h > 12) {
        h = h - 12;
    }

    return `${h}:${m}`;
}
