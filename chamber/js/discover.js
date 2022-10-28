// Last Visit section using local storage to store users last visits
const visitsDisplay=  document.querySelector('.visits');

//get the stored value in local storage
let numVisits = Number(window.localStorage.getItem('visits-ls'));
 
// determine if this is the first visit or display the number of visits
if (numVisits !== 0){
    visitsDisplay.textContent = numVisits;}
    else{
        visitsDisplay.textContent = ` Welcome 😊 this is your first visit!`;
    }

// increment the number of visits
numVisits++;

// Store the new number of visits value
localStorage.setItem('visits-ls', numVisits);
