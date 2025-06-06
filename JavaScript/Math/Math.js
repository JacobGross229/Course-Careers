// Rounding

const num = 2.4
const roundedNum = Math.round(num);
console.log(roundedNum); // 2

// ------------------------------------------------------------------------------

// Rounding to the nearest 10th 

const num1 = 2.55726;
const roundedNum1 = Math.round(num1 * 10) / 10; // thousandth is (num * 1000) / 1000
console.log(roundedNum1);

// ------------------------------------------------------------------------------

// Rounding down 

const num2 = 2.9;
const roundedNum2 = Math.floor(num2);
console.log(roundedNum2);

// ------------------------------------------------------------------------------

// Rounded up

const num3 = 2.2;
const roundedNum3 = Math.ceil(num3);
console.log(roundedNum3);

// ------------------------------------------------------------------------------

// Max value 

const x = 10;
const y = 20;

const max = Math.max(x, y);
console.log(max);

// ------------------------------------------------------------------------------

// Min value 

const x1 = 10;
const y1 = 20;

const min = Math.min(x, y, 30, -10, 9, 89);
console.log(min);

// Min value in array 

const arr = [1, 3, 4, 5, 2, 1, 2];

const min1 = Math.min(...arr); // Needs spread operator 
console.log(min1);

// ------------------------------------------------------------------------------

// Absolute Value 

const abs = Math.abs(9);
console.log(abs);

// ------------------------------------------------------------------------------

// Infinity 

const x2 = Infinity // ++ Infinity 
const y2 = -Infinity // -- Infinity 

