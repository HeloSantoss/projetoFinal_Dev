let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Increment slide index
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    
    // Show current slide
    slides[slideIndex].classList.add('active');
    
    // Call function again after 5 seconds
    setTimeout(showSlides, 5000);
}

// Start slideshow when page loads
document.addEventListener('DOMContentLoaded', () => {
    slides[0].classList.add('active');
    setTimeout(showSlides, 5000);
});
