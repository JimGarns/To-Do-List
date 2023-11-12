// Assign elements to variables for ease of use
const input = document.getElementById('main-input')
const button = document.getElementById('add-list')
const listUl = document.getElementById('list-ul')


//Add event listener to the 'Add' button for the adding of items to the list
button.addEventListener('click', () =>{

    //Check the string isn't empty - including trimming whitespace
    if(input.value.trim() !== '') {

        //Add a new list element, containing a delete button, with the value of the input at the time of being added
        listUl.innerHTML += `<li>${input.value} <button class = 'delete'>Delete</button></li>`
    }

    //Reset the input to empty
    input.value = '';
})


//Add event listener to the Delete button(s) created by the above
listUl.addEventListener('click', (event) => {

    //Check the click target contains Delete
    if (event.target.classList.contains('delete')) {

        // Remove the closest li parent of the clicked delete button
        event.target.closest('li').remove();
    }
});