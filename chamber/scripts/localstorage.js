document.addEventListener("DOMContentLoaded", function () {
    const visitsDisplay = document.querySelector(".visits");
    const lastVisitKey = "lastVisit";
    const oneDay = 1000 * 60 * 60 * 24;

    // Get the last visit date from localStorage
    let lastVisit = localStorage.getItem(lastVisitKey);

    if (lastVisit) {
        lastVisit = new Date(lastVisit);
        const currentVisit = new Date();
        const timeDifference = currentVisit - lastVisit;

        if (timeDifference < oneDay) {
            visitsDisplay.textContent = "Back so soon! Awesome!";
        } else {
            const daysBetweenVisits = Math.floor(timeDifference / oneDay);
            const dayText = daysBetweenVisits === 1 ? "day" : "days";
            visitsDisplay.textContent = `You last visited ${daysBetweenVisits} ${dayText} ago.`;
        }
    } else {
        visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
    }

    // Update the last visit date in localStorage
    localStorage.setItem(lastVisitKey, new Date().toISOString());
});