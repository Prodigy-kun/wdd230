// Extract the elements from the DOM
const celcius = document.querySelector('.temp').textContent
const speed = document.querySelector('.speed').textContent
let chill = document.querySelector('.chill')
// A function that accepts a temp in celcius and converts to fahrenheit
const cel_to_fah = (celcius) => {
    const fahrenheit = (Number(celcius) * (9 / 5)) + 32

    return fahrenheit
}
// A function that converts from KM/hr to Miles/hr
const to_mph = (speed) => {
    return Number(speed) / 1.621371
}
const fahrenheit = cel_to_fah(celcius)
const mph = to_mph(speed)
// verify if the temperature and speed conditions are met
if (fahrenheit <= 50 && mph > 3) {
    const chill_factor = 35.74 + (0.6215 * fahrenheit) - (35.75 * (mph ** 0.16)) + (0.4275 * fahrenheit * (mph ** 0.16))
    chill.textContent = chill_factor.toFixed(2)
} else {
    chill = 'N/A'
}