const url = "https://api.openweathermap.org/data/2.5/weather?lat=23&lon=-2.15&appid=a2812664bebf2b97b52c7942dbdeb2ed&units=metric";
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
    let condition = results.weather[0].description;
    condition = condition.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let icon = results.weather[0].icon;
    let weatherIcon = getWeatherIcon(icon);
    let temp = 'Actual Temperature: '+results.main.temp+'°C';
    let feelsLike = 'Feels Like: '+results.main.feels_like+'°C';
    let windSpeed = 'Wind Speed: '+results.wind.speed+' mph';
    let windChill = calcWindChill(results.main.temp, results.wind.speed);
    
    document.querySelector(".weatherIcon").src = weatherIcon
    document.querySelector(".skyCondition").textContent = condition
    document.querySelector("#temperature").textContent = temp
    document.querySelector("#feelsLike").textContent = feelsLike
    document.querySelector("#windSpeed").textContent = windSpeed
    document.querySelector("#windChill").textContent = windChill

}

function calcWindChill(t, s) {
    if (t <= 50 && s > 3){
        const wind_chill = Math.round(
            35.74 + 0.6215 * t - 35.75 * s **0.16 + 0.4275 * t * s ** 0.16);
        return "Wind Chill: "+wind_chill+"°C";
    } else {
        return "Wind Chill: N/A";
    };
  };
getWeather(url);
 