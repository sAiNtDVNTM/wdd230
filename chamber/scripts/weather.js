document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

    const apiKey = 'c6f4ffe7da92f28ac782a9e6008e0551'; 
    const city = 'Guatemala City';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperature').textContent = data.main.temp;
            document.getElementById('description').textContent = data.weather[0].description;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const forecastElement = document.getElementById('forecast');
            for (let i = 0; i < 3; i++) {
                const dayForecast = data.list[i];
                const dayElement = document.createElement('div');
                dayElement.innerHTML = `
                    <h4>${new Date(dayForecast.dt_txt).toLocaleDateString()}</h4>
                    <p>Temp: ${dayForecast.main.temp}°C</p>
                    <p>${dayForecast.weather[0].description}</p>
                `;
                forecastElement.appendChild(dayElement);
            }
        })
        .catch(error => console.error('Error fetching forecast data:', error));

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const spotlightContainer = document.getElementById('spotlight-members');
            const spotlightMembers = data.filter(member => member.membership_level === 'Gold' || member.membership_level === 'Silver').slice(0, 3);

            spotlightMembers.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}" />
                    <h3>${member.name}</h3>
                    <p>${member.other_info}</p>
                    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                `;
                spotlightContainer.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error fetching members data:', error));

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 2000);
    }

    const banner = document.getElementById('banner');
    const closeBannerButton = document.getElementById('close-banner');

    banner.style.display = 'block';

    closeBannerButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
});
