document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menu toggle functionality
    const hamburgerElement = document.querySelector('#myButton');
    const navElement = document.querySelector('#anime');
    hamburgerElement.addEventListener('click', () => {
        navElement.classList.toggle('open');
        hamburgerElement.classList.toggle('open');
    });

    // Update current year and last modified date
    const currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;

    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Modification: " + lastModifiedDate;

    // Visit counter functionality

    // Slideshow functionality
    let slideIndex = 1;
    showSlides(slideIndex);

    function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        
        if (slides.length === 0) {
            console.error("No slides found with class 'mySlides'");
            return;
        }

        if (n > slides.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = slides.length;
        } else {
            slideIndex = n;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }

    // Next/previous controls
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }
});
