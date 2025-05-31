// If statenets 

//const age = 21;

if (age >= 16) { // if statement 
    console.log("you can drive");
} else if (age === 15) { // else if statement 
    console.log("Only one year away");
} else if (age === 14) {
    console.log("Only two years away");
} else {
    console.log("You cannot drive"); // else statement 
}

console.log("Thanks for playing");


const x = undefined;

if (!x) {
    console.log("true")
}

const age = prompt("How old are you: ");

if (age >= 12 && age <= 20) {
    alert("You can ride the rollercoaster");
} else if (age >= 40) {
    alert("You can only ride the rollercoaster if you are with someone betwen 12 and 20")
} else {
    alert("You cannot ride the rollercoaster")
}