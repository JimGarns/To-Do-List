const input = document.getElementById('main-input')
const button = document.getElementById('add-list')
const listUl = document.getElementById('list-ul')

button.addEventListener('click', () =>{


    if(input.value.trim() !== '') {
        listUl.innerHTML += `<li>${input.value} <button class = 'delete'>Delete</button></li>`
    }

    input.value = '';
})

listUl.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        // Remove the closest li parent of the clicked delete button
        event.target.closest('li').remove();
    }
});