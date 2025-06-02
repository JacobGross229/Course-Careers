const person = {
    name: "jake",
    children: [{name: "Ken"}, {name: "Karen"}]
};

delete person.name; // delete stuff

console.log("name" in person); // if a property exists 

for (const property in perosn) {
    console.log (person);
}

console.log(perosn.children[0].name); // access specific things 

for (const [property, value] of Object.entries(person)) {
    console.log (property, value); // Property name and value 
}

for (const value of Object.values(person)) {
    console.log (value); // You only get the values
}

// ------------------------------------------------------------------------------------------------------------
const person1 = {
    name: "jake",
    children: [{name: "Ken"}, {name: "Karen"}]
};

const p1 = perosn1;
const p2 = perosn1;

delete p1.name;

console.log(person1, p1, p2);

// ------------------------------------------------------------------------------------------------------------

const obj = {
    name: "Jake"
};

const obj2 = { ...obj, age: 24 };
obj2.name = "red";

console.log(obj);
console.log(obj2);