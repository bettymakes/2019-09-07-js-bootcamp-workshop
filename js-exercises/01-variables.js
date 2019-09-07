// Exercises: Variables
// Log something to the console!
console.log("hello!! does this work?");


// 1a) Create a bank account variable
const myConstantVariable = 1; // This value can never change
let anotherVariable = 15; // This is similar to var with caveats

var bankAccount = 10;
bankAccount = 1000000;


// 1b) Create a statement that says "My bank account value is $x"
//     - Explore single & double quoted strings
//     - Bonus: Template literals

var doubleQuotedString = "My string in double quotes!";
var singleQuotedString = 'This string is using single quotes!';
var escapedString = 'It\'s rainy today'; // You can use the \ character to escape an apostrophe

var bankStatement1 = "My bank account value is $" + bankAccount + "."; // String concatenation
var bankStatement2 = `My bank account value is $${bankAccount}.`; // Template Literal

console.log(bankStatement1);


// 2) Math'ing! We follow the rules of BEDMAS
var wholeNumber = 52;
var decimalNumber = 3.14159;

var sum = 10 + 10; // 20
var difference = 20 - 5; // 15
var quotient = 60 / 3; // 20
var product = 2 * 3; // 6
var exponent = 3**3; // 27

var equation = 10 * 2 + 5; // 25
var equation2 = 10 * (2 + 5); // 70






// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
var currentYear = 2019;
// Store their birth year in a variable.
var birthYear = 1902;
// Calculate their age based on the stored values.
var age = currentYear - birthYear;
// Output them to the screen like so: "They are NN years old.", substituting the values.
var ageSentence1 = "They are " + age + " years old.";
var ageSentence2 = `They are ${age} years old.`;
var ageSentence3 = `They are ${currentYear - birthYear} years old.`;

console.log(ageSentence3); // Output to the screen


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".



// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Formula: (0°C × 9/5) + 32

var celcius = 20;
var cToF = (celcius * 9 / 5) + 32;
var cToFStatement = `${celcius}°C is ${cToF}°F.`;


// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
// Formula: (32°F − 32) × 5/9
var fahrenheit = 105;
var fToC = (fahrenheit - 32) * 5/9;
var fToCStatement = `${fahrenheit}°F is ${fToC}°C.`;








