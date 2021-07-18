// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.split(""))

// a) Your answer: This should log each individual character of "Charlie 2021" as a separate value in an array
// b) Verify and explain: It worked! the .split() method with turn a string into an array. When the double quotes are added to .split("") it does the same thing but also turns each individual character into a string value.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: This will give me an error because there is no "return" in the function
// b) Verify and explain: the greeter function must have a return statement in order to return the output of "Hello LEARN Student". Technically, the function is still running in the background but does not have a defined output.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: This will log an error because .map() should be used in a function
// b) Verify and explain: Interesting! I didn't think this would work because it's not in a function. Here is what I was thinking it should look like:

// var multBy2 = [4, 5, 6, 7, 8]
// const multiplier = (array) => {
//   return array.map(value => value *2)
// }
// console.log(multiplier(multBy2));

// Both sets of code give me the same output, but I'm not sure why I thought .map() had to be used in only a function. 
// .map() is just a built-in method that must take a function as an argument. 
// That's probably where I got confused! 

// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: I should get back [12, 14]
// b) Verify and explain: Correct! the higher-order function, .filter(), iterates through an array and returns a subset of it. The condition stated in the method argument evaulated to an even number. The 'value modulus two is strictly equal to 0' argument will return even numbers only, despite the variable being declared as 'oddsOnly'. 

// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
console.log(learnStudent)

// a) Your answer: Learn{student: "George", cohort: "Charlie", year:2021}
// b) Verify and explain: Correct! The class 'Learn' is declared with a constructor method that initializes objects for the class. The learnStudent variable is creating a single instance of the Learn object with the 'new' operator followed by the name of the class. Finally, the variable learnStudent is logged to the console. This will log an object with the name of Learn followed by a set of curly braces with key-value pairs inside. The Learn class is acting as a blueprint so it can be called upon later in the code.
var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"