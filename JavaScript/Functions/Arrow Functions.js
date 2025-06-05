const func = (x, y) => {
    return x + y;
}

// ---------------------------------------------------------------------------------------------------------------------

// const func1 = (x, y) => [ x: x, y: y ];

const result = func1(1, 2);
console.log(result);

// ---------------------------------------------------------------------------------------------------------------------

// Normal function

function getName () {
    return this.firstName + " " + this.lastName
}

const person = {
    firstName: "Jake",
    lastName: "Gross",
    getName: getName,
};

const person2 = {
    firstName: "John",
    lastName: "Doe",
    getName: getName,
}

const personName = person2.getName();
console.log(personName);

// Arrow Function 

const getName = () => {
    return this.firstName + " " + this.lastName
}

const person3 = {
    firstName: "Jake",
    lastName: "Gross",
    getName: getName,
};

const person24 = {
    firstName: "John",
    lastName: "Doe",
    getName: getName,
}

const personName1 = person2.getName();
console.log(personName);