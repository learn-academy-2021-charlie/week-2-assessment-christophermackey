// ASSESSMENT 2: Coding practical questions with Jest

// const { expect } = require("@jest/globals")
// const { test } = require("jest-circus")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"

// First, I need to write out my test syntax using the describe method. (I use the acronym DTE to remember the order of nested functions that are required for Jest testing. DTE = describe, test, expect.)
// Inside the describe method, provide the function name as a string
// Inside the test method, provide as string describing what the function does
// Inside the expect method, call the function we want to examine
// To that function, add the matcher .toEqual() to compare the actual output to the expected output
describe ("divisibleByThree", () => {
    it ("describe what the function does", () => {
        expect (divisibleByThree(num1)).toEqual("15 is divisible by three")
        expect (divisibleByThree(num2)).toEqual("0 is divisible by three")
        expect (divisibleByThree(num3)).toEqual("-7 is not divisible by three")
    })
})

// b) Create the function that makes the test pass.

// Declare a function with the name of divisibleByThree 
// Add a number parameter
// Call an if else statement to find if the number passed in is divisible by three using mod
// Have that statement return the appropriate response, "number is/is not divisible by three"  
const divisibleByThree = (number) => {
    if(number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// Invoke a describe method 
// Add capitalizeThis function name to argument
// Nest a test method with "returns an array with all the words capitalized"
// Nest two expect methods with the function called in the agument
// Add .toEqual method with expected output
// Declare expected output as separate variables to make code more readable

describe("capitalizeThis", () => {
    let newArray1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    let newArray2 = ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    test("returns an array with all the words capitalized", () => {
        expect(capitalizeThis(randomNouns1)).toEqual(newArray1)
        expect(capitalizeThis(randomNouns2)).toEqual(newArray2)
    })
})

// b) Create the function that makes the test pass.

// Create a function called capitalizeThis
// Pass in array as a param
// Return array with .map()
// Use value parameter to target the value params in the array
// Find 0th index and add the .toUpperCase() method to capitalize the first letter of each word
// Use addition sign and .substring(1) to concat the uppercased letter with the remainder of each string
const capitalizeThis = (array) => {
    return array.map(value => value[0].toUpperCase() + value.substring(1))
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

// use a describe method to test a function called firstVowelFinder
// add a nested test method with "return the index of the first vowel"
// add three expect() methods with the provided variables as arguments
// add .toEqual() methods with expected outputs

describe("firstVowelFinder", () => {
    test("return the index of the first vowel", () => {
        expect(firstVowelFinder(vowelTester1)).toEqual(1)
        expect(firstVowelFinder(vowelTester2)).toEqual(0)
        expect(firstVowelFinder(vowelTester3)).toEqual(2)
    })
})

// b) Create the function that makes the test pass.

// declare a function called firstVowelFinder 
// add a string param
// write a for loop to iterate through the string
// declare a variable for the letters 
// add a conditional that finds if letter variable is a vowel
// return index

const firstVowelFinder = (string) => {
    for (let i = 0; i < string.length; i++) {
        var letter = string.charAt(i)
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            return i
        }
    }
}