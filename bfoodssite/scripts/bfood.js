const hamburger = document.querySelectorAll('.ham')
const nav = document.querySelector('.shownot.sidenav')
const container = document.querySelector('.container1')
const header = document.querySelector('header')
hamburger[0].addEventListener('click', function (){
    nav.classList.toggle('displaynav')
    container.style.opacity = 0.5
    header.style.opacity = .5
})
hamburger[1].addEventListener('click', function (){
    nav.classList.toggle('displaynav')
    container.style.opacity = 1
    header.style.opacity = 1
})
//weather
// select HTML elements in the document
const currentTemp = document.querySelector('.temp');
const weatherIcon = document.querySelector('.weathericon');
const condition = document.querySelector('.cond');
const humidity = document.querySelector('.hum');
const forecast = document.querySelector('.cast');
// const captionDesc = document.querySelector('figcaption');
// const geocode = 'http://api.openweathermap.org/geo/1.0/direct?q=fairbanks&limit=5&appid=6a33e7afcd960815147a04e78bc16bd1'
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.1580933&lon=-117.3505966&appid=6a33e7afcd960815147a04e78bc16bd1&units=imperial';
async function getdata(url){
try {
    const request = await fetch(url)
    if (request.ok){
        response = await request.json()
        displayResults(response)
        uploadoption(response)
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
    condition.textContent = weatherData.weather[0].description;
    humidity.textContent =  weatherData.main.humidity;
    weatherIcon.setAttribute('src', iconsrc);
}
getdata(url)
// Last Modified
const lastModified = document.lastModified;
document.querySelector('.modified').textContent = lastModified
//Lazyloading
let imagesToLoad = document.querySelectorAll('img[data-src]')
const loadImages = (images) => {
    images.setAttribute('src', images.getAttribute('data-src'))
    images.onload = () => images.removeAttribute('data-src')
}
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target)
            }
        })
    })
    imagesToLoad.forEach((img) => {
        observer.observe(img)
    })
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img)
    })
}
const url2 = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
async function collectdata(url){
try {
    const request = await fetch(url)
    if (request.ok){
        response = await request.json()
        uploadOption(response)
    } else{
        throw Error(await request.text())
    }
} catch (error) {
    console.log(error)
}
}
//process form
const today = new Date();
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}

collectdata(url2)
const selects = [document.querySelector('#fruit1'),document.querySelector('#fruit2'),document.querySelector('#fruit3')]
const uploadOption = function(datalist){
    datalist.forEach(data => {
        selects.forEach(select =>{
            const opt = document.createElement('option')
            opt.setAttribute('value', data.name)
            opt.textContent = data.name
            select.append(opt)
        })
        
    })
   
    const sender = document.querySelector('#sendreq')
    sender.addEventListener('click', function(){
    const div = document.createElement('div')
    const name=document.createElement('h4')
    const email=document.createElement('p')
    const phone=document.createElement('p')
    const fruit1=document.createElement('p')
    const fruit2=document.createElement('p')
    const fruit3=document.createElement('p')
    const instruction=document.createElement('p')
    const date=document.createElement('p')
    const carbohydrates=document.createElement('p')
    const protein=document.createElement('p')
    const fat=document.createElement('p')
    const sugar=document.createElement('p')
    const calories=document.createElement('p')
    name.textContent = `Name: ${document.querySelector('#fname').value}`
    email.textContent = `Email: ${document.querySelector('#mail').value}`
    phone.textContent = `Phone: ${document.querySelector('#phone').value}`
    fruit1.textContent = `Fruit One: ${document.querySelector('#fruit1').value}`
    fruit2.textContent = `Fruit Two: ${document.querySelector('#fruit2').value}`
    fruit3.textContent = `Fruit Three: ${document.querySelector('#fruit3').value}`
    instruction.textContent = `SPecial Instruction: ${document.querySelector('#request').value}`
    date.textContent = `Order Date: ${today.toLocaleDateString("en-US", options)}`
    let carb = 0
    let prot = 0
    let fatt = 0
    let cal = 0
    let sug = 0
    const energyli = [document.querySelector('#fruit1').value, document.querySelector('#fruit2').value, document.querySelector('#fruit3').value]
    energyli.forEach(energy=>{
        for(let i = 0; i<datalist.length; i++){
            if (datalist[i].name === energy){
                carb += datalist[i].carbohydrates
                prot += datalist[i].protein
                fatt += datalist[i].fat
                cal += datalist[i].calories
                sug += datalist[i].sugar
            }
        }
    })
    carbohydrates.textContent = `Total Carbohydrate: ${carb}`
    protein.textContent = `Total Protein: ${prot}`
    fat.textContent = `Total Fat: ${fatt}`
    sugar.textContent = `Total Sugar: ${sug}`
    calories.textContent = `Total: ${cal}`
    div.setAttribute('class', 'message')
    div.append(name)
    div.append(email)
    div.append(phone)
    div.append(fruit1)
    div.append(fruit2)
    div.append(fruit3)
    div.append(instruction)
    div.append(carbohydrates)
    div.append(protein)
    div.append(fat)
    div.append(sugar)
    div.append(calories)
    document.querySelector('.container2').append(div)
})

}
// console.log(document.querySelector('#name').value)
