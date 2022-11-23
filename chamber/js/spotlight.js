const api = "https://thankgodandrew1.github.io/wdd230/chamber/js/json/data.json",
businessCards = document.querySelector("#spotlight");

async function getBusinesses() {
  let response = await fetch (api);
  if (response.ok) {
    let companies = await response.json();
    const businesses = selectBusiness(companies);
    displayBusinesses(businesses)
  }
  else {
    throw Error(response.statusText)
  }
}
function randomSelect(data) {
  const randomindex = Math.floor(Math.random() * data.length)
  const spotlights = data[randomindex]
  data.splice(randomindex, 1)
  return spotlights
}

function selectBusiness(data) {
  const members = data.company.filter(company =>
    company.level == "Gold Membership" || company.level == "Silver Membership")
  let spotlightArray = [];
  for (let i = 0; i < 3; i++) {
    spotlightArray.push(randomSelect(members))
  }
  return spotlightArray
}

function displayBusinesses(businesses) {
  // Create elements to add to the document
  businesses.forEach(company => {
    let card = document.createElement('section'),
    logo = document.createElement('img'),
    name = document.createElement('h3'),
    phone = document.createElement('p'),
    address = document.createElement('p'),
    membership = document.createElement('p'),
    url = document.createElement('a');

    logo.setAttribute('src', `${company.imagepath}`);
    logo.setAttribute('alt', `${company.name} logo`);
    logo.setAttribute('loading', 'lazy');

    name.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    phone.textContent = `Phone: ${company.phonenumber}`;
    membership.textContent = `${company.level}`;
    
    url.textContent = `Business Website`
    url.setAttribute("href", `${company.websiteurl}`);
    url.setAttribute('target', '_blank');
    
    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(membership);
    card.appendChild(url);

    businessCards.appendChild(card);
  });
}
getBusinesses()