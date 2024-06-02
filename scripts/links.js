const baseURL = "https://saintdvntm.github.io/wdd230/";
const linksURL = "https://saintdvntm.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log("Fetched data:", data); // Debug: log the fetched data
            displayLinks(data.weeks); // Access the weeks property of the fetched data
        } else {
            throw new Error("Failed to fetch links");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayLinks(weeks) {
    if (!Array.isArray(weeks)) {
        console.error("Data is not an array:", weeks); // Debug: log the data if it's not an array
        return;
    }

    const linksContainer = document.querySelector('.card1 ul'); // Target the existing ul inside .card1

    weeks.forEach(week => {
        // Create list item for the week
        const weekItem = document.createElement('li');
        weekItem.innerHTML = `<a>${week.week}:</a> `;

        // Create links for each activity in the week
        week.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            weekItem.appendChild(linkElement);

            // Add a comma and space after each link except the last one
            if (week.links.indexOf(link) < week.links.length - 1) {
                weekItem.appendChild(document.createTextNode(", "));
            }
        });

        // Append the week item to the container
        linksContainer.appendChild(weekItem);
    });
}

// Call the getLinks function to fetch and display links
getLinks();
