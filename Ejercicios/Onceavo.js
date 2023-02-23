/* Write a program that will allow someone to guess a four digit pin exactly 4
times. If the user guesses the number correctly. It prints “That was
correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right. */

let pin = "0704";

// Example output:
// Please make your guess: 
// 4544 
// Sorry that was wrong.
// Please make your guess: 
// 4444
// Sorry that was wrong.
// Please make your guess: 
// 0704
// That was correct!

for (let index = 1; index <= 4; index++) {
    console.log("Please make your guess: ");
    let guess = prompt()
    if (guess === pin) {
        console.log("That was correct!");
        index = 4;
    } else {
        console.log("Sorry that was wrong");
    }

}
