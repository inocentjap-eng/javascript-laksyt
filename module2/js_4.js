'use strict';
// Task 4: ask for numbers until the user gives zero,
// then print them from the largest to the smallest.
const numbers = [];
let number;

do {
    number = parseInt(prompt('Enter a number (0 stops).'));
    if (number !== 0) {
        numbers.push(number);
    }
} while (number !== 0);

// b - a sorts in descending order (a - b would be ascending).
numbers.sort((a, b) => b - a);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
