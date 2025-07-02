//Create two arrays, array1 and array2, with the following elements:

//Concatenate array1 and array2 into a new array called concatArray.

//Use the copyWithin method to copy the first two elements of concatArray to the end of the array.

//Use the fill method to replace the last three elements of concatArray with the number 0.

//Remove the last element from concatArray using the pop method and store it in a variable lastElement.

//Remove the first element from concatArray using the shift method and store it in a variable firstElement.

//Add the elements 10 and 20 to the beginning of concatArray using the unshift method.

// Write a function called modifyArray that takes an array as input and performs all the above steps on it.

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

let concatArray = array1.concat(array2);

concatArray.copywithin (9, 0, 3);

concatArray.fill(0, 5, 9);

let lastelement = concatArray.pop();

let firstElement = concatArray.shift();

concatArray.unshift(10, 20);

let array = concatArray;

let modifyArray = array;