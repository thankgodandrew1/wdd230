function toggleMenu() {
    document.querySelector('.toggle').classList.toggle('open')
    document.getElementById('hamburgerBtn').classList.toggle('open')
}
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
const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

const date = new Date();
console.log(date)
const year = date.getFullYear();

const currentYear = document.querySelector("#current_year");
currentYear.textContent = year;

let lastModif = (document.lastModified);
document.getElementById("last_update").innerHTML = lastModif;

const datefield = document.querySelector(".date");

const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(date);
datefield.innerHTML = `${fulldate}`
console.log("${fulldate}")


const dayOfWeek = date.getDay()

let message;

if (dayOfWeek >= 1  && dayOfWeek <=2) {
    message = "🤝 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}else{
    message = ''
}
document.querySelector('#meeting').innerHTML = message
document.querySelector('#small-meeting').innerHTML = message