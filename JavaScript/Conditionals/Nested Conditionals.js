const country = prompt ("What country do you live in?");

if (country === "CA" || country === "canada") {
    const age = promt("Please enter your age.");
    alert(age);
    if (age >= 18) {
        const color = prompt("Please enter your fav color");
        if (color === "blue") {
            alert("That is my favorite color too!");
        }
    } else {
        alert("thanks for participating, we do not need anymore info")
    }
} else {
    alert("thanks for participating, we do not need anymore info")
}