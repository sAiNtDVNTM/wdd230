document.addEventListener('DOMContentLoaded', () => {
    const memberContainer = document.getElementById('memberContainer');
    const toggleViewButton = document.getElementById('toggleView');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data, 'grid');
        })
        .catch(error => console.error('Error fetching member data:', error));

    function displayMembers(members, view) {
        memberContainer.innerHTML = '';
        members.forEach(member => {
            if (view === 'grid') {
                memberContainer.innerHTML += `
                    <div class="member-card">
                        <img src="images/${member.image}" alt="${member.name}">
                        <h3>${member.name}</h3>
                        <div class="member-info">
                            <p>${member.address}</p>
                            <p>${member.phone}</p>
                            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                            <p>Membership Level: ${member.membership_level}</p>
                            <p>${member.other_info}</p>
                        </div>
                    </div>
                `;
            } else {
                memberContainer.innerHTML += `
                    <div class="member-list-item">
                        <img src="images/${member.image}" alt="${member.name}">
                        <div>
                            <h3>${member.name}</h3>
                            <p>${member.address}</p>
                            <p>${member.phone}</p>
                            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                            <p>Membership Level: ${member.membership_level}</p>
                            <p>${member.other_info}</p>
                        </div>
                    </div>
                `;
            }
        });
    }

    // Toggle view event listener
    toggleViewButton.addEventListener('click', () => {
        if (memberContainer.classList.contains('grid-view')) {
            memberContainer.classList.remove('grid-view');
            displayMembers(members, 'list');
        } else {
            memberContainer.classList.add('grid-view');
            displayMembers(members, 'grid');
        }
    });
});
