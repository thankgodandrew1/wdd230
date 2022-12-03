function toggleMenu() {
    document.querySelector('.toggle').classList.toggle('open')
    document.getElementById('hamburgerBtn').classList.toggle('open')
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

const date = new Date();
// console.log(date)
const year = date.getFullYear();

const currentYear = document.querySelector("#current_year");
currentYear.textContent = year;

let lastModif = (document.lastModified);
document.getElementById("last_update").innerHTML = lastModif;

const datefield = document.querySelector(".date");
const submit = document.getElementById('submitDate')

const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(date);
datefield.innerHTML = `${fulldate}`
submit.textContent = String(String(date.getMonth() + 1).padStart(2, '0') + "/" + date.getDate()).padStart(2, '0') + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
console.log("${fulldate}")
console.log("${submissiondate}")