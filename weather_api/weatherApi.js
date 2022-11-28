// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
// const geocode = 'http://api.openweathermap.org/geo/1.0/direct?q=fairbanks&limit=5&appid=6a33e7afcd960815147a04e78bc16bd1'
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=64.83&lon=-147.71&appid=6a33e7afcd960815147a04e78bc16bd1&units=imperial';
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
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc.toUpperCase());
    captionDesc.textContent = desc;
    document.querySelector('div').setAttribute('class', 'design')
}
getdata(url)
