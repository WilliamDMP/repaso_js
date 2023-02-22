/* Given a string change the every second letter to an uppercase ‘Z’. Assume
there are no space. */

let str1 = "javascript";  
// Example output: 
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 

for (let index = 0; index < str1.length; index++) {
    if ((index+1) % 2 === 0) {
        console.log(str1[index] = "Z")
    } else {
        console.log(str1[index])
    }
}
