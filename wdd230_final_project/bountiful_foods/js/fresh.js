// $$$$$$$$$$$$ THE FRESH PAGE FUNCTION SECTION
let drinksMade = Number(window.localStorage.getItem("drinksMade"));

const fruitURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
let fruits = [];

async function getFruits(fruitUrl){
    const response = await fetch(fruitURL);
    const data = await response.json();
    fruits = data;
    displayResults(data)
}

function displayResults(fruitData) {
    const fruitsSelect1 = document.createElement('select'),
    fruitsSelect2 = document.createElement('select'),
    fruitsSelect3 = document.createElement('select');

    fruitData.forEach(fruit => {
        fruitsSelect1.setAttribute('name', 'fruits');
        fruitsSelect1.classList.add('fruits-select');
        fruitsSelect1.classList.add('input');
    
        const fruitOptionEle = document.createElement('option');
        fruitOptionEle.setAttribute('value', fruit.name);
        fruitOptionEle.textContent = fruit.name;
        
        fruitsSelect1.appendChild(fruitOptionEle);
        });

        fruitData.forEach(fruit => {
            fruitsSelect2.setAttribute('name', 'fruits');
            fruitsSelect2.classList.add('fruits-select');
            fruitsSelect2.classList.add('input');       

            const fruitOptionEle = document.createElement('option');
            fruitOptionEle.setAttribute('value', fruit.name);
            fruitOptionEle.textContent = fruit.name;
            
            fruitsSelect2.appendChild(fruitOptionEle);
        });

        fruitData.forEach(fruit => {
            fruitsSelect3.setAttribute('name', 'fruits');
            fruitsSelect3.classList.add('fruits-select');
            fruitsSelect3.classList.add('input');

            const fruitOptionEle = document.createElement('option');
            fruitOptionEle.setAttribute('value', fruit.name);
            fruitOptionEle.textContent = fruit.name;
            
            fruitsSelect3.appendChild(fruitOptionEle);
        });
        
    // Document object Manipulation Section
    const dropdowns = document.getElementById('fruit-selector');

    fruitsSelect1.setAttribute('id', 'fruits1');
    fruitsSelect1.setAttribute('name', 'fruits1');
    dropdowns.appendChild(fruitsSelect1); 

    fruitsSelect2.setAttribute('id', 'fruits2');
    fruitsSelect2.setAttribute('name', 'fruits2');
    dropdowns.appendChild(fruitsSelect2);

    fruitsSelect3.setAttribute('id', 'fruits3');
    fruitsSelect3.setAttribute('name', 'fruits3');
    dropdowns.appendChild(fruitsSelect3);

}

// Show output
function displayOutput(list = fruits){
    const dOutput = document.getElementById('output');
    dOutput.innerHTML = '';
    let carbohydrates = 0;
    let protein = 0;
    let fat = 0;
    let calories = 0;
    let sugar = 0;

    const fruit1 = document.getElementById('fruits1').value;
    const fruit2 = document.getElementById('fruits2').value;
    const fruit3 = document.getElementById('fruits3').value;

    fruits.forEach(fruit => {
        if(fruit.name == fruit1 || fruit.name == fruit2 || fruit.name == fruit3){
            carbohydrates += fruit.nutritions.carbohydrates;
            protein += fruit.nutritions.protein;
            fat += fruit.nutritions.fat;
            calories += fruit.nutritions.calories;
            sugar += fruit.nutritions.sugar;
        }
        else{
            // console.log("AH! whats's wrong? - 😂 ask Brother Blazzard he might have distorted the JSON file");
            console.log('')
        }
    });

    // Get all other form input values
    const orderDate = document.getElementById('date');
    orderDate.value = getDate();
    const oDate = orderDate.value;
    const firstName = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const specialInstruct = document.getElementById('specialInstruc').value;

    //Create DOM Elements
    const nameEle = document.createElement('p');
    const emailEle = document.createElement('p');
    const phoneEle = document.createElement('p');
    const specialInstructEle = document.createElement('p');
    const fruit1Ele = document.createElement('p');
    const fruit2Ele = document.createElement('p');
    const fruit3Ele = document.createElement('p');

    //fruit nutrients
    const carbohydrateEle = document.createElement('p');
    const proteinEle = document.createElement('p');
    const fatEle = document.createElement('p');
    const sugarEle = document.createElement('p');
    const caloriesEle = document.createElement('p');
   
    // Order Date
    const dateEle = document.createElement('p');

    //add the content
    nameEle.innerHTML = `<b>First Name: </b> ${firstName}`;
    emailEle.innerHTML = `<b>Email: </b> ${email}`;
    phoneEle.innerHTML = `<b>Phone Number: </b> ${phone}`;
    specialInstructEle.innerHTML = `<b>Additional Instructions:</b> ${specialInstruct}`;
    const lineBreak1 = document.createElement('br');

    fruit1Ele.innerHTML = `<b>First Fruit: </b> ${fruit1}`;
    fruit2Ele.innerHTML = `<b>Second Fruit: </b> ${fruit2}`;
    fruit3Ele.innerHTML = `<b>Third Fruit: </b> ${fruit3}`;
    const lineBreak2 = document.createElement('br');
    
    carbohydrateEle.innerHTML = `<b>Carbohydrates: </b> ${carbohydrates}g`;
    proteinEle.innerHTML = `<b>Protein: </b> ${protein}g`;
    fatEle.innerHTML = `<b>Fat: </b> ${fat}g`;
    caloriesEle.innerHTML = `<b>Calories: </b> ${calories}`;
    sugarEle.innerHTML = `<b>Sugar: </b> ${sugar}g`;
    
    const lineBreak3 = document.createElement('br');
    dateEle.innerHTML = `<b>Order Date: </b> ${getDate()}`;
    
    const elementList = [nameEle, emailEle, phoneEle, specialInstructEle, lineBreak1, fruit1Ele, fruit2Ele, fruit3Ele, lineBreak2, carbohydrateEle, proteinEle, fatEle, sugarEle, caloriesEle, lineBreak3, dateEle];
    elementList.forEach(element => {
        dOutput.appendChild(element);
    }); 
    drinksMade ++;

    document.getElementById("fruitMixForm").reset();
}

function fruitMixCounter(){
    localStorage.setItem("drinksMade", drinksMade);
}

function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
  
    if(dd<10) {
        dd = '0'+dd
    } 
  
    if(mm<10) {
        mm = '0'+mm
    } 
  
    today = yyyy + '-' + mm + '-' + dd;
    return today;
 }
 document.getElementById('Btn').addEventListener('click', displayOutput);
 document.getElementById('Btn').addEventListener('click', fruitMixCounter);
 getFruits(fruitURL); 