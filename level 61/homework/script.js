//Description: Write a function that takes an array as an argument and returns the number of elements in that array.
function countElements(array) {
    return array.length;
}
//Description: Write a function that takes two arrays as arguments and returns a new array that is the result of concatenating the two arrays.
function concatenateArrays(array1, array2) {
    return array1.concat(array2);
}
//Description: Write a function that takes an array and a value as arguments and adds the value to the end of the array using the push() method. The function should return the new length of the array.
function addElement(array, value) {
    array.push(value);
    return array.length;
}
//Description: Write a function that takes an array as an argument and removes the last element from the array using the pop() method. The function should return the removed element.
function removeLastElement(array) {
    return array.pop();
}