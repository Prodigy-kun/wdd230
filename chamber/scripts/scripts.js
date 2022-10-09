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
document.querySelector('span').textContent = lastModified

// Hamburger
function toggleMenu() {
    document.querySelector("nav-list").classList.toggle("open");
    document.getElementById("ham").classList.toggle("open")
}
const x = document.getElementById("ham");
x.onclick = toggleMenu