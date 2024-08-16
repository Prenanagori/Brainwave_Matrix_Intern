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





























// // For any JS functionality, add it here
// document.querySelectorAll('.menu li a').forEach(item => {
//     item.addEventListener('click', () => {
//         // Add your JavaScript code here for additional interactivity
//         alert('Menu item clicked!');
//     });
// });

