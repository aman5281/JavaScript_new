// *************Array

const myArr = [0, 1, 2, 3, 4];
const heroes = ["Shaktiman", "Spiderman", "Batman", "Superman"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[1]);

// Array Methods
// myArr.push(5);
// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

// ************************** SLICE & SPLICE ****************************

// SLICE() :- Extracts a portion of an array and returns a new array containing the extracted elements. No, It does not modify the original array.
// ****************************** EXAMPLE ********************************
// const originalArray = [1, 2, 3, 4, 5];
// const newArray = originalArray.slice(1, 4); // Extracts elements from index 1 up to (but not including) index 4
// console.log(newArray);       // Output: [2, 3, 4]
// console.log(originalArray);  // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

// SPLICE() :- Changes the contents of an array by removing, replacing, or adding elements. Yes, It modifies the original array in place.
// ****************************** EXAMPLE **********************************
// const originalArray = [1, 2, 3, 4, 5];
// const removedElements = originalArray.splice(1, 2, 6, 7); // Removes 2 elements starting from index 1, and adds 6 and 7
// console.log(removedElements); // Output: [2, 3] (the elements that were removed)
// console.log(originalArray);   // Output: [1, 6, 7, 4, 5] (original array is modified)

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3, 6, 7);
console.log("C", myArr);
console.log(myn2);
