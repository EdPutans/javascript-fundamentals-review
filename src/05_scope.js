/**
 * @description Here we will practice bits related to scoping and closures.
 * 
 */

// 1. what do we call the scope this variable is in? Type your answer below
// Answer:  
let eggs = "EGG!"

// 2. Does the function have access to the `eggs` variable? 
function canIGetEggs() {
  // can i print eggs? why / why not?
}


// 3.Now, the other way round. Why do i get an error in the console.log below? Type your answer below:
// Answer:

function getADate() {
  let someRandomDate = "2020-4-20 15:00"
  return someRandomDate;
}

console.log(someRandomDate);

// 4. My variable is set to false. Can we write code inside of the function that would change it to true
let myVariable = false

// if we can't explain why here:
function canIUseThisFunctionToSetTrue() {
  // If we can, write your solution here:
}

// 5. Refactor the code so that it:
// - changes `myFavouriteVariable` to 420 if 5 > 3.
// - otherwise, it prints "u stupid"
// no need for functions here - just an if-statement is fine.

let myFavouriteVariable = 69;

// 6. Mutation!
// Our function `print10Plus20` prints 10 + 20 🤯
//

let someNumber = 5; // while keeping this as 5

function print10Plus20() {
  someNumber = 10;

  if (someNumber !== 10) throw new Error("The number must be 10 inside the function!"); // this will error if wrong

  console.log("Here's 10 + 20", someNumber + 20);
}

print10Plus20();
if (someNumber !== 5) throw new Error("The number outside the function should remain 5!"); // this will error if wrong



