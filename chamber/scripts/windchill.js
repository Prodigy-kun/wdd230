// Extract the elements from the DOM
let celcius = document.querySelector('.temp')
// console.log(celcius.textContent)
const speed = document.querySelector('.speed').textContent
let chill = document.querySelector('.chill')
/////Current Weather update
// select HTML elements in the document
const weatherIcon = document.querySelector('.liveweather');
// const captionDesc = document.querySelector('figcaption');
// const geocode = 'http://api.openweathermap.org/geo/1.0/direct?q=ibadan&limit=5&appid=6a33e7afcd960815147a04e78bc16bd1'
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=7.37&lon=3.89&appid=6a33e7afcd960815147a04e78bc16bd1&units=metric';
async function getdata(url){
try {
    const request = await fetch(url)
    if (request.ok){
        response = await request.json()

        displayResults(response)
    } else{
        throw Error(await request.text())
    }
} catch (error) {
    console.log(error)
}
}

function displayResults(weatherData) {
    console.log(weatherData.main.temp.toFixed(0))
    celcius.textContent = `${weatherData.main.temp.toFixed(0)}`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc.toUpperCase());
    console.log(celcius)
    return celcius
}
getdata(url)
// A function that accepts a temp in celcius and converts to fahrenheit
const cel_to_fah = (celciuss) => {
    const fahrenheit = (Number(celciuss.textContent) * (9 / 5)) + 32

    return fahrenheit
}
// A function that converts from KM/hr to Miles/hr
const to_mph = (speed) => {
    return Number(speed) / 1.621371
}
console.log(celcius.textContent)
const fahrenheit = cel_to_fah(celcius.textContent)
// console.log(fahrenheit)
const mph = to_mph(speed)
// verify if the temperature and speed conditions are met
if (fahrenheit <= 50 && mph > 3) {
    const chill_factor = 35.74 + (0.6215 * fahrenheit) - (35.75 * (mph ** 0.16)) + (0.4275 * fahrenheit * (mph ** 0.16))
    chill.textContent = chill_factor.toFixed(2)
} else {
    chill = 'N/A'
}