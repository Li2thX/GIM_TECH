let currentSlide = 0;
const slides = document.getElementsByClassName("slider-img");

function carousel() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;

    slides[currentSlide].style.display = "block";
    setTimeout(carousel, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider .slide');
    let index = 0;

    setInterval(() => {
        slides[index].style.transform = 'translateX(-100%)';
        index = (index + 1) % slides.length;
        slides[index].style.transform = 'translateX(0)';
    }, 3000);
});
