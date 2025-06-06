const num = [1, 2, 3, 34, 12, 56, 2, 1, 2, 6];
const sortedNums = num.sort((a, b) => a - b); // Assending order 
console.log(sortedNums)

// --------------------------------------------------------------------------------------------------------------

const num1 = [1, 2, 3, 34, 12, 56, 2, 1, 2, 6];
const sortedNums1 = num.sort((a, b) => b - a); // Desending order 
console.log(sortedNums1);

// --------------------------------------------------------------------------------------------------------------

// Objects

const objs = [
    {year: 2008, make: "Ford"},
    {year: 2018, make: "Toyota"},
    {year: 2023, make: "Audi"},
    {year: 2025, make: "BMW"}
];

const sortedObjs = objs.sort((a, b) => {
    const diffInYear = b.year - a.year;
    if (diffInYear === 0) {
        if (a.make > b.make) {
            return 1
        } else if (a.make < b.make) {
            return -1
        } else {
            return 0
        }
    }

    return diffInYear
});

console.log(sortedObjs); // console.log(sortedObjs.reverse()); will reverse the array 