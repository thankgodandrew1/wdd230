const url = "https://api.openweathermap.org/data/2.5/weather?lat=23&lon=-2.15&appid=a2812664bebf2b97b52c7942dbdeb2ed&units=metric";
console.log(url)
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
  // const api = "https://api.openweathermap.org/data/2.5/weather?q=Olathe,KS,USA&units=imperial&APPID=da28ef0488cf8a1538d20c2db5897dd8"

// let data, newTemp, speed;

// async function getWeather() {
//     const response = await fetch(api);
//     data = await response.json()
// console.log(data);
//     return data

// }    

// const fillData = async () =>{
//     await getWeather();
//     newTemp = data['main']['temp']
//     speed = data['wind']['speed']

//     let currentTemp = Math.round(newTemp)
//     localtemp.innerHTML += `${currentTemp}&#176;F`;

//     let currentspeed = Math.round(speed)
//     wSpeed.textContent = `Wind Chill: ${currentspeed} mph`
//     return newTemp, speed
//     }

// //     const getIconDesc = async () => {
// //         await fillData();
// //     let icon = data['weather'][0]['icon'];
// //     let desc = data['weather'][0]['description'];

// //     weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
// //     weatherIcon.alt = `open weather map API icon: ${desc}`;
// //     iconDesc.textContent = desc.toUpperCase()
// // } 

// const calculateWindChill = async () => {
//     await fillData();
//     if (newTemp <= 50 && speed > 3.0) {
//         let chill = 35.74 + (0.6215*newTemp) - (35.75*speed**0.16) + (0.4275*newTemp*speed**0.16)
//         chill = Math.round(chill)
//         wChill.innerHTML = `Wind Chill: ${chill}&#176;F`
//     }else {
//         wChill.textContent = `N/A`
//     }
//     }
  
//     window.addEventListener('load', calculateWindChill);
// const api = 'https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=a2812664bebf2b97b52c7942dbdeb2ed&units=metric'

// let data, newTemp, speed;

// async function getWeather() {
//     const response = await fetch(api);
//     data = await response.json();
//       return data;
//     }

// // function getWeatherIcon(icon){
// //     let icon_url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
// //     return icon_url;
// // };

// const doStuff = async() =>{
//     await getWeather();
//     results = data;
//     let condition = results.name;
//     condition = condition.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
//     let icon = results.weather[0].icon;
//     let weatherIcon = getWeatherIcon(icon);
//     let temp = 'Actual Temperature: '+results.main.temp+'°C';
//     let feelsLike = 'Feels Like: '+results.main.feels_like+'°C';
//     let windSpeed = 'Wind Speed: '+results.wind.speed+' MPH';
//     let windChill = calcWindChill(results.main.temp, results.wind.speed);
    
//     document.querySelector(".weatherIcon").src = weatherIcon
//     document.querySelector(".skyCondition").textContent = condition
//     document.querySelector("#temperature").textContent = temp
//     document.querySelector("#feelsLike").textContent = feelsLike
//     document.querySelector("#windSpeed").textContent = windSpeed
//     document.querySelector("#windChill").textContent = windChill

// }

// function calcWindChill(t, s) {
//     if (t <= 50 && s > 3){
//         const wind_chill = Math.round(
//             35.74 + 0.6215 * t - 35.75 * s **0.16 + 0.4275 * t * s ** 0.16);
//         return "Wind Chill: "+wind_chill+"°F";
//     } else {
//         return "Wind Chill: N/A";
//     };
//   };
// const api = "https://api.openweathermap.org/data/2.5/weather?q=Olathe,KS,USA&units=imperial&APPID=da28ef0488cf8a1538d20c2db5897dd8"

// let data, newTemp, speed;

// async function getWeather() {
//     const response = await fetch(api);
//     data = await response.json()
// console.log(data);
//     return data

// }    

// const fillData = async () =>{
//     await getWeather();
//     newTemp = data['main']['temp']
//     speed = data['wind']['speed']

//     let currentTemp = Math.round(newTemp)
//     localtemp.innerHTML += `${currentTemp}&#176;F`;

//     let currentspeed = Math.round(speed)
//     wSpeed.textContent = `Wind Chill: ${currentspeed} mph`
//     return newTemp, speed
//     }

// //     const getIconDesc = async () => {
// //         await fillData();
// //     let icon = data['weather'][0]['icon'];
// //     let desc = data['weather'][0]['description'];

// //     weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
// //     weatherIcon.alt = `open weather map API icon: ${desc}`;
// //     iconDesc.textContent = desc.toUpperCase()
// // } 

// const calculateWindChill = async () => {
//     await fillData();
//     if (newTemp <= 50 && speed > 3.0) {
//         let chill = 35.74 + (0.6215*newTemp) - (35.75*speed**0.16) + (0.4275*newTemp*speed**0.16)
//         chill = Math.round(chill)
//         wChill.innerHTML = `Wind Chill: ${chill}&#176;F`
//     }else {
//         wChill.textContent = `N/A`
//     }
//     }
  
//     window.addEventListener('load', calculateWindChill);
