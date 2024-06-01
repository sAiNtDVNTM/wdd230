const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const apiKey = "c6f4ffe7da92f28ac782a9e6008e0551";
const lat = 49.75;
const lon = 6.64;
const units = "imperial";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(await response.text());
        }
        const data = await response.json();
        console.log(data);
        displayResults(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayResults(data) {
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    currentTemp.textContent = `${temp.toFixed(1)}°F`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = description;
    captionDesc.textContent = description;
}

apiFetch();