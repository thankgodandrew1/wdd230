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
const forcastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.1581&lon=-117.3506&exclude=current,minutely,hourly,alerts&appid=0f8c88146a435b8db9d6af1cacbbc02a&units=METRIC";

async function getWeather(url, curWea) {
    const response = await fetch(url);
    const data = await response.json();
    displayResult(data, curWea);
    }
    
function getWeatherIcon(icon){
    let icon_url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    return icon_url;
};

function displayResult(data, current = 'curWea') {
    if(current == 'curWea'){
        let condition = `${data.weather[0].description}`;
        condition = `${condition.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}`;
        let icon = `${data.weather[0].icon}`;
        let weatherIcon = `${getWeatherIcon(icon)}`;
        let temp = `Temperature: ${data.main.temp.toFixed(0)}°C`;
        // let feelsLike = `Feels Like: ${data.main.feels_like}°C`;
        let humidity = `Humidity: ${data.main.humidity}%`;
        // let windChill = `${calcWindChill(results.main.temp, results.wind.speed)}`;
        
        document.querySelector(".weatherIcon").src = weatherIcon
        document.querySelector(".weatherIcon").alt = condition
        document.querySelector(".skyCondition").textContent = condition
        document.querySelector("#temperature").textContent = temp
        // document.querySelector("#feelsLike").textContent = feelsLike
        document.querySelector("#humidity").textContent = humidity
        // document.querySelector("#windChill").textContent = windChill
    }
    else{
        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const date = new Date();
        const today = date.getDay();

        const temp1 = data.daily[0].temp.max.toFixed(0);
        const temp2 = data.daily[1].temp.max.toFixed(0);
        const temp3 = data.daily[2].temp.max.toFixed(0);

        const day1 = document.querySelector(".day1");
        day1.textContent = weekday[today+1];
        const day2 = document.querySelector(".day2");
        day2.textContent = weekday[today+2];
        const day3 = document.querySelector(".day3");
        day3.textContent = weekday[today+3];

        const temperature1 = document.getElementById("temp1");
        temperature1.textContent = temp1 + "°C";
        const temperature2 = document.getElementById("temp2");
        temperature2.textContent = temp2 +"°C";
        const temperature3 = document.getElementById("temp3");
        temperature3.textContent = temp3 +"°C";
    }
}
date();
getWeather(url, 'curWea');
getWeather(forcastURL, 'forecast');