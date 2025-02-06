// Image Gallery
const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.querySelector('.lightbox .caption');

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        lightboxImg.src = e.target.getAttribute('data-full');
        caption.textContent = e.target.alt;
        lightbox.style.display = 'flex';
    }
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('close')) {
        lightbox.style.display = 'none';
    }
});

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Auto-advance slides
setInterval(() => {
    changeSlide(1);
}, 5000);