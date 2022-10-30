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