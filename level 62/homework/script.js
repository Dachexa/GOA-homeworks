//# Task 1: Working with Strings and Numbers

//**Objective**: Use array methods to manipulate arrays containing both numbers and strings.

//**Instructions:**

//1. Create two arrays, numsArray and strArray, with the following elements:

//2. Concatenate numsArray and strArray into a new array called combinedArray.

//3. Use the copyWithin method to copy the first three elements of combinedArray to the positions starting from index 4.

//4. Use the fill method to replace the elements from index 2 to index 4 with the string "filled".

//5. Remove the last element from combinedArray using the pop method.

//6. Remove the first element from combinedArray using the shift method.

//7. Add the elements 100 and 200 to the beginning of combinedArray using the unshift method.

//**Challenge**:

//Write a function called modifyArray that takes an array as input and performs all the above steps on it.

let numsArray = [1, 2, 3, 4, 5];
let strArray = ["apple", "banana", "cherry"];
let combinedArray = numsArray.concat(strArray);
combinedArray.copyWithin(4, 0, 3);
combinedArray.fill("filled", 2, 4);
let lastElement = combinedArray.pop();
let firstElement = combinedArray.shift();
combinedArray.unshift(100, 200);