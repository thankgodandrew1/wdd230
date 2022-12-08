// Total numbers of drinks ordered
const drinksTotal = document.getElementById('drinkTotal');

let drinksMade = Number(window.localStorage.getItem("drinksMade"));

// drinksTotal.textContent = drinksMade
if (drinksMade !== 0){
    drinksTotal.textContent = drinksMade;}
    else{
        drinksTotal.textContent = `None, make a fresh fruit mix!`
    }
