const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#anime');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})

document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;

    var lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent =
        "Last Modification: " + lastModifiedDate;
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Weather Forecast
document.addEventListener("DOMContentLoaded", function () {
    const weatherData = {
        temperature: 25,
        description: "Sunny",
    };
    document.getElementById("temperature").innerText = weatherData.temperature;
    document.getElementById("description").innerText = weatherData.description;
});
