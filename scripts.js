let slideIndex = 0;

function moveSlides(n) {
    let slides = document.querySelector('.slides');
    let images = slides.querySelectorAll('img');
    slideIndex += n;

    if (slideIndex >= images.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = images.length - 1;
    }

    let newTransform = -slideIndex * 100;
    slides.style.transform = 'translateX(' + newTransform + '%)';
}

// // Optionally, you can add automatic sliding functionality
// setInterval(() => {
//     moveSlides(1);
// }, 3000); // Change slide every 3 seconds
