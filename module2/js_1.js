'use strict';
// Task 1: five numbers printed in the reverse order they were entered.
const numbers = [];

for (let i = 0; i < 5; i++) {
    const number = parseInt(prompt(`Enter number ${i + 1} of 5.`));
    numbers.push(number);
}

// Loop the array from the last index down to 0 (no array.reverse()).
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
