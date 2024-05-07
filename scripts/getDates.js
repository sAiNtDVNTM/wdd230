document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;

  var lastModifiedDate = document.lastModified;
  document.getElementById("lastModified").textContent = "Last Modification: " + lastModifiedDate;

});

 // Hamburger menu functionality
 const hamburger = document.querySelector('#hamburger');
 const menu = document.querySelector('#anime');

 hamburger.addEventListener('click',  () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
 });

 const darkModeButton = document.getElementById("darkModeButton");
  const main = document.querySelector("main");

  darkModeButton.addEventListener("click", function () {
    main.classList.toggle("dark-mode");
  });