const x = 2;
try {
    console.log("Try");
    throw Error("This is an error") // Throwing an error
    // x.toUpperCase();
} catch(err) {
    console.log(err.message, err.name); // x.toUpperCase is not a function TypeError
} finally {
    console.log("Finally"); // Runs no matter what. Usually a clean up operation 
}
