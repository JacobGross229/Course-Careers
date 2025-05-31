const arr = [10, 20, false]; // The recommended method
arr[arr.length -1] = 100;

arr[arr.length + 2] = 100

console.log(arr.length);

const arr = new Array(20, 20, 20); // not as common and not recommended

console.log(arr);

const arr = [];

const name1 = prompt("Enter your name");
const age = prompt("Enter your age");
const hairColor = prompt("Enter your hair collor");

if (name1 !== "") 
    arr.push(name1);
if (age !== "")
    arr.push(age);
if (hairColor !== "")
    arr.push(hairColor);

const del = prompt("Would you like to delete the last element");

if (del === "yes")
    arr.pop();
alert(arr);

const arr = [];
const arr2 = [1, 2, 3]
const arr3 = [3, 4, 5, "hello"];

arr.push(arr2);
arr.push(arr3);

console.log(arr[1][3][0]);