document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;
    
    var lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Modification: " + lastModifiedDate;
  });