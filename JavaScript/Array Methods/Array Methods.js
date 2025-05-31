const arr = [1, 2, 3]
arr.shift()

console.log(arr);

arr.unshift();

arr.sort(); // sorting using strings 

arr.sort((a, b) => a - b); // sorting in assending order

arr.concat(); // conbines arrays 

arr.splice() // removes elements (2, 2) removes element 2 and 2 elements total
const removed = arr.splice(2, 3);

console.log(arr, removed);

arr.join(); // Joins the elements inside the element with a string

const arr1 = [45, 23, 45, -8, 7];
const str = arr.join(" | "); 

console.log(str);


arr.slice(); // return a portion of the array 

const sl = arr.slice(1, 3);

console.log(sl);