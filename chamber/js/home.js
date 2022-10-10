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

const currentYear = document.querySelector("#current_year");
currentYear.innerHTML = `${year}`;

// const timestamp = `Last Updated: ${document.lastModified}`;
// document.querySelector(".lastMod").textContent = timestamp;


//TO GET THE LAST MOODIFIED TIME USING JS
// alert(document.lastModified);
let lastModif = (document.lastModified);
document.getElementById("last_update").innerHTML = lastModif;