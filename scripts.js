let currentSlide = 0;

function moveSlide(direction) {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth + 20; // Including margin

    currentSlide += direction;

    // Ensure the slider doesn't move out of bounds
    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide >= slides.length - 4) { // Adjust based on number of visible slides
        currentSlide = slides.length - 4;
    }

    const offset = -currentSlide * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
}
// Countdown Timer Logic (example)
const countdownDate = new Date("Aug 31, 2024 00:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
    }
}, 1000);
// latest blog
$(document).ready(function(){
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
        nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
















