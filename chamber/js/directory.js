const api = "https://thankgodandrew1.github.io/wdd230/chamber/js/json/data.json",
businessCards = document.querySelector(".directory");

fetch(api)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const companies = jsonObject["company"]
        companies.forEach(displayCompanies);
    })
function displayCompanies(company){
    let card = document.createElement('section');
    let name = document.createElement('h3')
    let logo = document.createElement('img');
    let phone = document.createElement('p')
    let address = document.createElement('p'); 
    let membership = document.createElement('p'); 
    let url = document.createElement('a'); 

    logo.setAttribute('src', `${company.imagepath}`);
    logo.setAttribute('alt', `${company.name} logo`);
    logo.setAttribute('loading', 'lazy'); 
    name.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phonenumber}`;
    membership.textContent = `${company.level}`;
    url.textContent = `Company Website`
    url.setAttribute("href", `${company.websiteurl}`);
    url.setAttribute('target', '_blank');

    card.appendChild(logo)
    card.appendChild(name)
    card.appendChild(address)
    card.appendChild(phone)
    card.appendChild(membership)
    card.appendChild(url)

    document.querySelector('div.directory').appendChild(card);
}
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".directory");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
