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