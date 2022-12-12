// Total numbers of drinks ordered
const drinksTotal = document.getElementById('drinkTotal');

let totalOrder = Number(window.localStorage.getItem("totalOrder"));

// drinksTotal.textContent = drinksMade
if (totalOrder !== 0){
    drinksTotal.textContent = totalOrder;}
    else{
        drinksTotal.textContent = `None, make a fresh fruit mix!`
    }
