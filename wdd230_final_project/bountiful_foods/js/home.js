//$$$$$$$$$$ The toggle function $$$$$$$$$$$
function toggleMenu() {
    document.querySelector('.toggle').classList.toggle('open')
    document.getElementById('#hamburgerBtn').classList.toggle('open')
}
const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

//$$$$$$$$$$$ Copyright year and last modified date function $$$$$$$$$$$$$$
function date(){
    const date = new Date();
    const year = date.getFullYear();

    const currentYear = document.querySelector("#current_year");
    currentYear.textContent = year;

    let lastModif = (document.lastModified);
    document.getElementById("last_update").innerHTML = lastModif;

}

//$$$$$$$$$$$$ The Carlsbard Weather Functions section $$$$$$$$$$$$$$$
const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,US&appid=a2812664bebf2b97b52c7942dbdeb2ed&units=metric";
// console.log(url)
async function getWeather(url) {
    const response = await fetch(url);
    const data = await response.json();
      doStuff(data);
    }

function getWeatherIcon(icon){
    let icon_url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    return icon_url;
};

function doStuff(data) {
    results = data;
    let condition = `${results.weather[0].description}`;
    condition = `${condition.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}`;
    let icon = `${results.weather[0].icon}`;
    let weatherIcon = `${getWeatherIcon(icon)}`;
    let temp = `Actual Temperature: ${results.main.temp.toFixed(0)}°C`;
    let feelsLike = `Feels Like: ${results.main.feels_like}°C`;
    let humidity = `Humidity: ${results.main.humidity}%`;
    let windChill = `${calcWindChill(results.main.temp, results.wind.speed)}`;
    
    document.querySelector(".weatherIcon").src = weatherIcon
    document.querySelector(".weatherIcon").alt = condition
    document.querySelector(".skyCondition").textContent = condition
    document.querySelector("#temperature").textContent = temp
    document.querySelector("#feelsLike").textContent = feelsLike
    document.querySelector("#humidity").textContent = humidity
    document.querySelector("#windChill").textContent = windChill
    
    // const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //     // Get relevant API info
    //     const date = new Date();
    //     const today = date.getDay();

    //     const hi1 = weatherData.daily[0].temp.max.toFixed(0);
    //     const hi2 = weatherData.daily[1].temp.max.toFixed(0);
    //     const hi3 = weatherData.daily[2].temp.max.toFixed(0);

    //     const lo1 = weatherData.daily[0].temp.min.toFixed(0);
    //     const lo2 = weatherData.daily[1].temp.min.toFixed(0);
    //     const lo3 = weatherData.daily[2].temp.min.toFixed(0);

    //     // DOM elements to be manipulated
    //     const day1 = document.getElementById("dOW1");
    //     day1.textContent = weekday[today+1];
    //     const day2 = document.getElementById("dOW2");
    //     day2.textContent = weekday[today+2];
    //     const day3 = document.getElementById("dOW3");
    //     day3.textContent = weekday[today+3];

    //     const sufFar = " °F"
    //     const hiEl1 = document.getElementById("hi1");
    //     hiEl1.textContent = hi1 +sufFar;
    //     const hiEl2 = document.getElementById("hi2");
    //     hiEl2.textContent = hi2 +sufFar;
    //     const hiEl3 = document.getElementById("hi3");
    //     hiEl3.textContent = hi3 +sufFar;

    //     const loEl1 = document.getElementById("lo1");
    //     loEl1.textContent = lo1 +sufFar;
    //     const loEl2 = document.getElementById("lo2");
    //     loEl2.textContent = lo2 +sufFar;
    //     const loEl3 = document.getElementById("lo3");
    //     loEl3.textContent = lo3 +sufFar;

}

function calcWindChill(t, s) {
    if (t <= 50 && s > 3){
        const wind_chill = Math.round(
            35.74 + 0.6215 * t - 35.75 * s **0.16 + 0.4275 * t * s ** 0.16);
        return `Wind Chill: ${wind_chill}°C`;
    } else {
        return `Wind Chill: N/A`;
    };
  };
getWeather(url);
date()