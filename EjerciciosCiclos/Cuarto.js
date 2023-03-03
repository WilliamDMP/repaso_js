/* Get the sum of two arrays…actually the sum of all their elements.
P.S. Each array includes only integer numbers. Output is a number too. */

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627

let value = 0
let value2 = 0

for (let index = 0; index < arr_1.length; index++) {
    value = arr_1[index] + value
}

for (let index = 0; index < arr_2.length; index++) {
    value2 = arr_2[index] + value2
}
console.log("valor suma de arreglo 1: ", value, "valor suma de arreglo 2: ", value2, "suma de los dos = ", value+value2)
