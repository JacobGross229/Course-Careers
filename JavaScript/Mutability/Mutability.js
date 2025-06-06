// Cant change 

true 
3
"str"
undefined
null

// ------------------------------------------------------------------------------------------

// emutable 

let x = 10;
const y = x; // copy of 10

x = 20;

console.log(x, y);

// ------------------------------------------------------------------------------------------

// Mutable 

let x1 = [1, 2, 3, 4, 5]; // x -> ref -> [1, 2, 3, 4, 5]
let y1 = x1; // y -> ref -> [1, 2, 3, 4, 5]

x1 = [1];  // y -> new ref -> [1]
console.log(x1, y1);

// ------------------------------------------------------------------------------------------

// Spread operator 

let x2 = [1, 2, 3, 4, 5]; 
let y2 = [...x2];
y[0] = 100;

console.log(x, y);

// ------------------------------------------------------------------------------------------

let x3 = [[1], [2], [3], [4]]; // ref -< [ref -> [1], ref -> [2], ref -> [3], ref -> [4]];
let y3 = [...x]; // ref -< [ref -> [100], ref -> [2], ref -> [3], ref -> [4]];
y3[0]= [100]; // only changes y
y3[0][0] = 100; // changes both values

console.log(x3, y3);

// ------------------------------------------------------------------------------------------

// Practical use

function modifyArray(x) { // x = arr
    x[0] = 100;
}

const arr = [1, 2, 3, 4];
console.log(arr);
modifyArray(arr);
console.log(arr);

// ------------------------------------------------------------------------------------------

// Example with object 

function modifyObj(x) { // x = arr
    x.prop = "test"
}

const obj = {name: "Jake"};
console.log(obj);
modifyObj(obj);
console.log(obj); 