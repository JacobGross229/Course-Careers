const m = new Map();
m.set("a", 3);
m.set("b", 2);
m.set("a", 4);

console.log(m.get("a"))

console.log(m.has(4));

console.log(m.delete(4));

console.log(m.size);

console.log(m);

// ------------------------------------------------------------------------------

// inefficiant way 

const str = "Hello world my name is Jake"
const freq = [];

for (const char of str) {
    let found = false;
    for (const [idx, pair] of freq.enteries) {
        const [key, value] = pair;
        if (key === char) {
            freq[idx] = [char, value + 1];
            found = true;
            break;
        }
    }
    if (!found) freq.push([char, 1])
}

console.log(freq);

// ------------------------------------------------------------------------------

// Efiiciant way 

const str1 = "Hello world my name is Jake";
const freq1 = new Map();

for (const char of str) {
    if (freq1.has(char)) {
        freq1.set(char, freq1.get(char) + 1)
    } else {
        freq1.set(char, 1);
    }
}

console.log(freq1.get(" "));

freq1.delete(' ');