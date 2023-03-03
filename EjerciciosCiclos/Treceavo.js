// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

let num1 = 2; 
let num2 = 8; 
// Example output: 
// 1 + 2 = 3
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36 

let summation = 0
let summation2 = 0

for (let index = 1; index <= num1; index++) {
    summation = index + summation
}

console.log(summation)

for (let index = 1; index <= num2; index++) {
    summation2 = index + summation2
}

console.log(summation2)