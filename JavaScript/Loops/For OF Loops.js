const strs = ["one", "two", "three"];

for (const [i ,str] of strs.entries()) {
    console.log(str);
}

const str = "hello world";

for (const char of str) {
    console.log(char);
}

// ------------------------------------------------------------------------------------------------

const matrix = []; 

for (let i = 0; i < 3; i++) {
    const numbers = [];

    for (let j = i * 3; j < i * 3 + 3; j++) {
        numbers.push(j + 1);
    }

    matrix.push(numbers);
}

console.log(matrix);

// ------------------------------------------------------------------------------------------------

const matrix1 = [];

for (let i = 0; i < 2; i++) {
    const arr = [];

    for (let j = 0; j < 3; j++) {
        const numbers1 = [];
        
        const start = i * 6 + j * 2 + 1;
        for (let k = start; k < start + 2; k++) {
            numbers1.push(k);
        }

        arr.push(numebrs1);
    }

    matrix1.push(arr);
}

console.log(numbers1);