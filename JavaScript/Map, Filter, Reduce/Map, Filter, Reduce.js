// Map example 1

const arr = [1, 2, 3, 4, 5, 6]
const squares = arr.map((x) => x ** 2)
console.log(squares);

// ----------------------------------------------------------------------------------------

// Map example 2



function map(arr1, func) {
    const newArr = [];

    for (const value of arr1) {
        const newValue = func(value);
        newArr.push();
    }

    return newArr;
}

const resultM = map(arr, (x) => x ** 2);
console.log(result);

// ----------------------------------------------------------------------------------------

// Filter Example 1

const arr2 = [1, 2, 3, 4, 5, 6];
const filteredArr = arr2.filter((value) => value & 2 == 0);
console.log(filteredArr);

// ----------------------------------------------------------------------------------------

// Filter Example 2

const arr3 = [1, 2, 3, 4, 5, 6];

function filter(arr, func) {
    const newArr1 = [];

    for(const value of arr3) {
        if (func(value)) {
            newArr1.push(value)
        }
    }

    return newArr1
}

const result = filter(arr3, (x) => x % 2 == 0)
console.log(result);

// ----------------------------------------------------------------------------------------

// Reduce Example 1

const arr4 = [1, 2, 3, 4, 5, 6];
const sum = arr.reduce((prev, current) => prev + current);
console.log(sum);

// ----------------------------------------------------------------------------------------

// Reduce Example 2

const arr5 = [1, 2, 3, 4, 5, 6];

function reduce(arr, func) {
    let currentResult = 0;

    for (const num of arr) {
        currentResult = func(currentResult, num);
    }

    return currentResult;
}

const result1 = reduce(arr, (prev, next) => prev - next);
console.log(result1);