//Create an array called fruits with the following elements:

//Use the slice method to create a new array citrus that contains the second and third elements of fruits.

//Use the join method to create a string fruitString from the fruits array, with elements separated by a dash -.

//Challenge - Mandatory/ სავალდებულოა ეს ნაწილიც!:

  
// Write a function called processFruits that takes an array of fruits as input, performs the above steps on it, and returns the resulting string.

let fruits = ['apple', 'banana', 'orange', 'lemon']
let citrus = fruits.slice(1, 3);
let fruitString = fruits.join('-');

// ======================================


function processFruits(fruits) {
    let citrus = fruits.slice(1, 3);
    let fruitString = fruits.join('-');
    return fruitString;
}