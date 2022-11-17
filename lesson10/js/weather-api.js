let h1 = document.createElement('h1'),
anchor = document.createElement('a'),
h2 = document.createElement('h2'),
figure = document.createElement('figure'),
temperature = document.createElement('p'),
windSpeed = document.createElement('p'),
windChill = document.createElement('p'),
icon = document.createElement('img'),
desc = document.createElement('figcaption'),
section = document.createElement('section');
const weatherDiv = document.querySelector('main')


const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,US&appid=a2812664bebf2b97b52c7942dbdeb2ed&units=imperial";

async function apiFetch(url) {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data)
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function getWeatherIcon(){
    let icon_url = `https://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`;
    return icon_url;
};
        
function displayResults(weatherData) {
    results = weatherData;
    temperature.innerHTML = `<strong>The current temperature in Fairbanks, Alaska is ${results.main.temp.toFixed(0)}&deg;F</strong>`;
    windSpeed.innerHTML = `<strong>Wind Speed: ${results.wind.speed} mph</strong>`;
    windChill.innerHTML = `<strong>${calcWindChill(results.main.temp, results.wind.speed)}</strong>`;
    const dDesc = `${results.weather[0].description}`;
    desc.textContent = `${dDesc.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}`;
    icon.setAttribute('src', getWeatherIcon())
    icon.setAttribute('alt', dDesc)
    anchor.setAttribute('href', `https://openweathermap.org`)
    anchor.setAttribute('target', `_blank`)
    anchor.textContent = `OpenWeather.org`
    h1.textContent = ` API Test `
    h1.appendChild(anchor)
    h2.textContent = `Current Condition Icon`
    figure.appendChild(icon)
    figure.appendChild(desc)

    section.appendChild(h1)
    section.appendChild(temperature)
    section.appendChild(windSpeed)
    section.appendChild(windChill)
    section.appendChild(h2)
    section.appendChild(figure)

    weatherDiv.appendChild(section)
    
};

function calcWindChill(t, s) {
    if (t <= 50 && s > 3){
        const wind_chill = Math.round(
            35.74 + 0.6215 * t - 35.75 * s **0.16 + 0.4275 * t * s ** 0.16);
        return `Wind Chill: ${wind_chill}°C`;
    } else {
        return `Wind Chill: N/A`;
    };
  };

apiFetch(url);