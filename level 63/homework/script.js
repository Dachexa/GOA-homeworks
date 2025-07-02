//# 1. Task 1
//**JavaScript Array Methods Task: Comprehensive Exercise**

//**Objective**: To practice using the concat, copyWithin, fill, pop, shift, unshift, join, slice, and splice array methods.

//**Instructions**:

//1. Create three arrays: arr1, arr2, and arr3 with the following elements:

//2. Concatenate arr1 and arr2 into a new array called mergedArray.

//3. Use the copyWithin method to copy the first three elements of mergedArray to the positions starting from index 5.

//4. Use the fill method to replace elements from index 6 to the end with the number 0.

//5. Remove the last element from mergedArray using the pop method.

//6. Remove the first element from mergedArray using the shift method.

//7. Add the elements 100 and 200 to the beginning of mergedArray using the unshift method.

//8. Use the splice method to remove the elements at indices 2 and 3, and replace them with the elements of arr3.

//9, Use the slice method to create a new array slicedArray that contains the last five elements of mergedArray.

//10. Use the join method to create a string from slicedArray, with elements separated by a comma ,.

// **Challenge(Mandatory):**

// - Write a function called comprehensiveArrayTask that takes three arrays as input and performs the above steps on them, returning the resulting string from step 10.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [11, 12, 13, 14, 15];

function comprehensiveArrayTask(arr1, arr2, arr3) {
    let mergedArray = arr1.concat(arr2);
    mergedArray.copyWithin(5, 0, 3);
    mergedArray.fill(0, 6);
    mergedArray.pop();
    mergedArray.shift();
    mergedArray.unshift(100, 200);
    mergedArray.splice(2, 2, ...arr3);
    let slicedArray = mergedArray.slice(-5);
    return slicedArray.join(", ");
}
console.log(comprehensiveArrayTask(arr1, arr2, arr3));


// # Task 6 : JavaScript Array Methods Task: Comprehensive Array Manipulation

// **Objective: To practice using a variety of array methods: concat, copyWithin, fill, pop, shift, unshift, join, slice, splice, flat, includes, indexOf, and lastIndexOf.
//**
//**Instructions:
//**

//1. Create three arrays: arr1, arr2, and nestedArray with the following elements:
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let nestedArray = [[11, 12], [13, 14], [15]];

//2. Concatenate arr1 and arr2 into a new array called combinedArray.
let combinedArray = arr1.concat(arr2);

//3. Use the copyWithin method to copy the first three elements of combinedArray to the positions starting from index 5.
combinedArray.copyWithin(5, 0, 3);

//4.Use the fill method to replace elements from index 6 to the end with the number 0.
combinedArray.fill(0, 6);

//5. Remove the last element from combinedArray using the pop method.
combinedArray.pop();

//6. Remove the first element from combinedArray using the shift method.
combinedArray.shift();

//7. Add the elements 100 and 200 to the beginning of combinedArray using the unshift method.
combinedArray.unshift(100, 200);

//8. Use the splice method to remove the elements at indices 2 and 3, and replace them with the elements [x, y, z].
combinedArray.splice(2, 2, 'x', 'y', 'z');

//9. Use the slice method to create a new array slicedArray that contains the last five elements of combinedArray.
let slicedArray = combinedArray.slice(-5);

//10. Use the join method to create a string from slicedArray, with elements separated by a comma ,.
let joinedString = slicedArray.join(", ");

//11. Use the flat method to flatten nestedArray into a single-level array and store it in flatArray.
let flatArray = nestedArray.flat();

//12. Check if the element 8 is included in flatArray using the includes method.
let includesEight = flatArray.includes(8);

//13. Find the index of the element 9 in flatArray using the indexOf method.
let indexOfNine = flatArray.indexOf(9);
