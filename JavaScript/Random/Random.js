// const num = Math.round(Math.random() * 10) // Random number between 0 and 10
// console.log(num);

// ------------------------------------------------------------------------------

// const num1 = 10 + Math.round(Math.random() * 10) // Random number between 10 and 20
// console.log(num);

// ------------------------------------------------------------------------------

// function randomNum(min, max) {
//     return Math.floor(Math.randiom() * (max - min)) + min;
// }
// 
// const num2 = randomNum(20, 80);
// console.log(num2);

// ------------------------------------------------------------------------------

function randomNum(min, max) {
    return Math.floor(Math.randiom() * (max - min)) + min;
}

let num = randomNum(1, 100);
let numGueses = 0;

function reset () {
    num = randomNum(1, 100);
    numGueses = 0;
    document.getElementById("num-guesses").innerHTML = 0;
}

function makeguess () {
    const guessInput = document.getElementById("guess");
    const guess = Number(guessInput);
    guessInput.value = "";
    const feedback = document.getElementById("feedback");

numGueses++;
document.getElementById("num-guesses").innerHTML = numGueses;

    if (guess === num) {
        feedback.innerHTML = "You guessed it" 
        reset();        
    } else if (guess > num) {
        feedback.innerHTML = "It is lower";
    } else {
        feedback.innerHTML = "It is higher"
    }
}