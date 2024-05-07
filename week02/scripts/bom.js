const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');

buttonElement.addEventListener('click', () => {
    const chapterName = inputElement.value.trim();
    if (chapterName !== '') {
        // Create a new li element
        const li = document.createElement('li');
        li.textContent = chapterName;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; 
        
        deleteButton.addEventListener('click', () => {
            listElement.removeChild(li);
            inputElement.focus(); 
        });

        li.appendChild(deleteButton);
        listElement.appendChild(li);
        inputElement.focus();

        inputElement.value = '';
    } else {
        alert('Please enter a chapter name.');
        inputElement.focus();
    }
});