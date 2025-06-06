for (let i = 10; i <= 100; i+= 10) {
    console.log(i);
}

// Declare variable, condition, something you want to do with it 

const divBy2 = [];
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i !== 0) continue; // skip iteration and continue on with the loop
    if (i % 2 === 0 && i !== 0) dicBy2.push(i); 
    if (divBy2.length >= 20) break;
}

console.log(divBy2);

// ---------------------------------------------------------------------------------------------------------------

const numberElements = Number(prompt('Enter a number between 1 and 10.'))

if (numberElements >= 1 && numberElements <= 10) {
    const list = document.getElementById("list");

    for (let i = 0; i < numberElements; i++) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(i.toString()));
        list.appendChild(li);
    } 
} else {
    alert("That is not a valid imput.")
}

// ---------------------------------------------------------------------------------------------------------------

const str = prompt("Enter a string of character:")
const target = "!"

for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === target) {
        alert(`We found the ${target} in ${i + 1} characters`)
        break;
    }
}