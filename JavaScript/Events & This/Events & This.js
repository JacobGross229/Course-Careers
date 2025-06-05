function enterUsername() {
    const username = document.getElementById("username").value;
    document.getElementById("text").innerHTML = username;
    alert(this);
} 

// ---------------------------------------------------------------------------------------------------------------------

const person = {
    name: "Jake",
    lastName: "Gross",
    getName: function() {
        console.log(this.name + this.lastName);
    }
}

person.getName();

// ---------------------------------------------------------------------------------------------------------------------

function test() {
    console.log("test")
}

const v = test;
v();

// ---------------------------------------------------------------------------------------------------------------------

function test() {
    console.log(this);
}

test();