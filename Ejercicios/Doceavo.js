/* Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
Palindrome: a word, phrase, or sequence that reads the same backward as
forward, e.g., madam or nurses run. */

let str3 = "racecar";
let str4 = "Java";
// Example output:
// string1 palindrome?: 
// Yes 
// string2 palindrome?: 
// No

let forward = ""
let backward = ""
let forward2 = ""
let backward2 = ""

//ciclos para primer string

for (let index = 0; index <= str3.length-1; index++) {
    forward = str3[index]
}

for (let i = str3.length-1; i >= 0; i--) {
    backward = str3[i]
}

if (forward === backward) {
    console.log("Palindrome?", str3,"Yes")
} else {
    console.log("Palindrome?", str3,"No");
}

// ciclos para segundo string

for (let index = 0; index <= str4.length-1; index++) {
    forward2 = str4[index]
}

for (let i = str4.length-1; i >= 0; i--) {
    backward2 = str4[i]
}

if (forward2 === backward2) {
    console.log("Palindrome?", str4, "Yes")
} else {
    console.log("Palindrome?", str4, "No");
}

