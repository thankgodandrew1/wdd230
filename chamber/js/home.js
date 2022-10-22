function toggleMenu() {
    document.querySelector('.toggle').classList.toggle('open')
    document.getElementById('hamburgerBtn').classList.toggle('open')
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

const date = new Date();
console.log(date)
const year = date.getFullYear();

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

const currentYear = document.querySelector("#current_year");
currentYear.innerHTML = `${year}`;

// const timestamp = `Last Updated: ${document.lastModified}`;
// document.querySelector(".lastMod").textContent = timestamp;


//TO GET THE LAST MOODIFIED TIME USING JS
// alert(document.lastModified);
let lastModif = (document.lastModified);
document.getElementById("last_update").innerHTML = lastModif;