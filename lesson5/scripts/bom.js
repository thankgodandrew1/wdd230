
const userInput = document.querySelector('input');
const button = document.querySelector('button');
const favList = document.querySelector('ul');

button.addEventListener('click', () => {
    const favScripture = userInput.value;
    userInput.value ='';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const deleteButton = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = favScripture;
    listItem.appendChild(deleteButton);
    deleteButton.textContent = '❌';
    favList.appendChild(listItem);
    
    deleteButton.addEventListener('click', function(){
        favList.removeChild(listItem);
        userInput.focus();
    });

});
// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.  
// Example:  button.addEventListener('click', function() { ...
// In the function block for adding a chapter, make sure the input is not blank and if not, do the following:
// create an li element
// create a delete button
// populate the li elements textContent or innerHTML with the input
// populate the button textContent with an ❌
// append the li element with the delete button
// append the list element with the li element just created and appended with text and the delete button
// add an event listener to the delete button that removes the li element when clicked
// send the focus to the input element
// clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.