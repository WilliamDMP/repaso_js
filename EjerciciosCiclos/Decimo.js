/* Given a number n Calculate the factorial of the number */

let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24

let factorial = 1

for (let index = n2; index >= 1; index--) {
    factorial = factorial * index
    
}

console.log(factorial)