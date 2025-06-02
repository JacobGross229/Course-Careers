const s = new Set(1, 2, 3, 4, 4, 3, 2, 1);
s.add(-1);
s.delete(4);

for (const number of s) {
    console.log(s);
}

// ------------------------------------------------------------------------------------------------

// inefficiant way 

const arr = [1, 3, 4, 5, 2, 1, 31, 2];

for (const [idx, value] of arr.entries()) {
    for (const value2 of arr.slice(idx + 1)) {
        if (value === value2) {
            console.log("Found duplicate of", value);
            break;
        }
    }
}

// ------------------------------------------------------------------------------------------------

// Efficiant way 

const arr1 = [1, 3, 4, 5, 2, 1, 31, 2];
const numbers = new Set(1, 3, 4, 5, 2);

for (const value of arr) {
    if (numbers.has(value)) {
        console.log("Found duplicate of", value);
    }
}

// ------------------------------------------------------------------------------------------------

// Determine values quickly 

const arr2 = [1, 3, 4, 5, 2, 1, 31, 2];
const numbers1 = new Set(arr);
const uniqueNumbers = Array.from(numbers1);

console.log(uniqueNumbers);