function add() {
    console.log("add");
}

add();

// ---------------------------------------------------------------------------------------------------

function add(x, y) {
    console.log(x + y);
}

add(10, 8); // Arguments 

// ---------------------------------------------------------------------------------------------------

function math(a1, a2, num=1) { // Optional value 
    console.log(a1 * a2 * num);
}

math(10, 20);
math(-10, 10, -1);

// ---------------------------------------------------------------------------------------------------

function math(a1, a2, num =1) {
    return a1 * a2 * num;
}

const res = math(10, 20);
console.log(res)

// ---------------------------------------------------------------------------------------------------

function math(a1, a2, num =1) { // Many results 
    return [a1 ** 2, a2 ** 2];
}

const [result1, result2] = math(10, 20);
console.log(result1, result2);

// ---------------------------------------------------------------------------------------------------

function removeAllChars(arrayOfStrings, charactersToRemove) {
    const newArray = [];

    for (const str of arrayOfStrings) {
        let newStr = ""
        for (const char of str) {
            if (charactersToRemove.includes(char)) [
                constine
            ]
            newStr += char
        }
        newArray.push(newStr)
    }

    return newArray
}

const result = removeAllChars(
    ["Hello world", "1234", "I am the best", "yes"],
    ["e", "2", "t"]
);

console.log(result)