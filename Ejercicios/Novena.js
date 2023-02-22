/* Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not. */

let str2 = "don’t know why";
// Example output: 
// “yes” 

let evaluate

for (let index = 0; index < str2.length; index++) {
    evaluate = str2.includes("y", index)
}

if (evaluate === true) {
    console.log("Yes")
} else {
    console.log("No")
}

