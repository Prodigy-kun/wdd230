// Today's date
const today = new Date();
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}
document.getElementById("date").textContent = today.toLocaleDateString("en-US", options)

// Last Modified
const lastModified = document.lastModified;
document.querySelector('.modified').textContent = lastModified

// Hamburger
function toggleMenu() {
    document.querySelector(".nav-list").classList.toggle("open");
    document.getElementById("ham").classList.toggle("open")
}
const x = document.getElementById("ham");
x.onclick = toggleMenu
//Visit
let day = today.getDay()
const meet = document.querySelector('.meet')
if (day === 1 || day === 2) {
    meet.setAttribute('class', 'show')
    meet.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
}
// local storage
const visit = document.querySelector('.visit')
// const times = window.localStorage.setItem('visit', '0')
let update = window.localStorage.getItem('visit')
if (Number(update) === 0) {
    visit.textContent = 'This is your first time'
} else {
    visit.textContent = update
}
update++
localStorage.setItem('visit', update)
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
// stores the date the user loads the form
document.querySelector('#submitBtn').addEventListener('click', ()=>{
    document.getElementById("hide").value = today.toLocaleDateString("en-US", options)
})
document.querySelector('#submitBtn').addEventListener('click', ()=>{
    document.querySelector('#hide').value = today.toLocaleDateString("en-US", options)
})
// json for directory page
const dircontain = document.querySelector('.dircontainer')
async function getCompanies(uploader){
    const request = await fetch('businessDir.json')
    if(request.ok){
        const response = await request.json()
        const maindata =  response['business']
        uploader(maindata)
    }
}

const uploadData = function(data){
data.forEach(subdata => {
    //create blank boxes
    const body = document.createElement('section')
    const name = document.createElement('h2')
    const address = document.createElement('h3')
    const phone =  document.createElement('h3')
    const logo = document.createElement('img')
    const link = document.createElement('a')
    //fil the blank boxes
    // body.setAttribute('class', 'tochange')
    body.classList.add('tochange', 'cardview')
    // body.setAttribute('class', 'listview')
    name.textContent = subdata.name
    address.textContent = subdata.adresses
    phone.textContent= subdata.phone
    logo.setAttribute('src', subdata.image)
    logo.setAttribute('alt', subdata.image)
    link.setAttribute('href', subdata.url)
    link.setAttribute('target', 'blank') 
    link.textContent = subdata.url
    //display content on website
    body.appendChild(logo)
    body.appendChild(name)
    body.appendChild(address)
    body.appendChild(phone)
    body.appendChild(link)
    dircontain.appendChild(body)
})
}
getCompanies(uploadData)
document.querySelector('.viewchange').addEventListener('click',()=>{
    document.querySelector('.viewchange').classList.toggle('open')
    document.querySelector('.dircontainer').classList.toggle('gridit')
    document.querySelector('.onlist').classList.toggle('forlist')
    const allList = document.querySelectorAll('.tochange')
    allList.forEach(each=>{
        each.classList.toggle('listview')
        each.classList.toggle('cardview')
    })
})
