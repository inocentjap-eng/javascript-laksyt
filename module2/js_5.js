'use strict';
// Task 5: ask for numbers until the user repeats a number already given,
// then print all given numbers in ascending order.
const numbers = [];
let duplicate = false;

while (!duplicate) {
    const number = parseInt(prompt('Enter a number.'));

    if (numbers.includes(number)) {
        console.log(`The number ${number} has already been given.`);
        duplicate = true;
    } else {
        numbers.push(number);
    }
}

numbers.sort((a, b) => a - b);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
