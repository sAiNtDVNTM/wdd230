document.addEventListener('DOMContentLoaded', () => {
    const myTown = document.querySelector('#town');
    const myDescription = document.querySelector('#description');
    const myTemperature = document.querySelector('#temperature');
    const myGraphic = document.querySelector('#graphic');
  
    const myKey = "98e4352dc08e3785dfd6c4377d9d8363";
    const myLat = "14.54";
    const myLong = "-90.52";
  
    const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
  
    async function apiFetch() {
        try {
          const response = await fetch(myURL);
          if (response.ok) {
            const data = await response.json();
            displayResults(data); // uncomment when ready
          } else {
              throw Error(await response.text());
          }
        } catch (error) {
            console.log(error);
        }
    }
  
    function displayResults(data) {
      myTown.innerHTML = data.name;
      myDescription.innerHTML = data.weather[0].description;
      myTemperature.innerHTML = `${data.main.temp}&deg;F`; // fixed units
      const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      myGraphic.setAttribute('SRC', iconsrc)
      myGraphic.setAttribute('alt', data.weather[0].description)
    }
  
    apiFetch();
  });
  