const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (jsonObject) {
        console.table(jsonObject); //Temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
        // prophets.forEach(ordinalNumbers)
    });

function displayProphets(prophet){

    let card = document.createElement('section')
    let h2 = document.createElement('h2')
    let parag = document.createElement('p')
    let parag1 = document.createElement('p')
    let portrait = document.createElement('img')

    //change the textContent property of the h2 element to contain the 
    //prophet's full name 
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    //change the textContent property of the p element to contain the 
    //prophet's birth date
    parag.textContent = `Date of birth: ${prophet.birthdate}`;

    //change the textContent property of the p element to contain the 
    //prophet's place pf birth
    parag1.textContent = `Place of Birth: ${prophet.birthplace}`;

    // /Build the image attributes by using the setAttribute values. 
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${ordinal(prophet.order)} Latter-day president`);
    portrait.setAttribute('loading', 'lazy');

    //Append the section card with the h2 element
    card.appendChild(h2);
    card.appendChild(parag);
    card.appendChild(parag1);
    card.appendChild(portrait);

    //Append the existing html div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
};
function ordinal(value){
    let str = String(value),
    len = str.length,
    end  = str.substring(len - 1, 1),
    bool = len > 1 && str.substring(len - 2, 1) === "1",
    dOrdinal = "th";
  if (end === "1" && !bool) {
    dOrdinal = "st";
  } else if (end === "2" && !bool) {
    dOrdinal = "nd";
  } else if (end === "3" && !bool) {
    dOrdinal = "rd";
  }
  return dOrdinal;
}