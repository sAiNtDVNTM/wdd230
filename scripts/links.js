const baseURL = "https://saintdvntm.github.io/wdd230/";
const linksURL = "https://saintdvntm.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log("Fetched data:", data); 
            displayLinks(data.weeks); 
        } else {
            throw new Error("Failed to fetch links");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayLinks(weeks) {
    if (!Array.isArray(weeks)) {
        console.error("Data is not an array:", weeks); 
        return;
    }

    const linksContainer = document.querySelector('.card1 ul'); 

    weeks.forEach(week => {

        const weekItem = document.createElement('li');
        weekItem.innerHTML = `<a>${week.week}:</a> `;

        week.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            weekItem.appendChild(linkElement);

            if (week.links.indexOf(link) < week.links.length - 1) {
                weekItem.appendChild(document.createTextNode(", "));
            }
        });

        linksContainer.appendChild(weekItem);
    });
}

// Call the getLinks function to fetch and display links
getLinks();
