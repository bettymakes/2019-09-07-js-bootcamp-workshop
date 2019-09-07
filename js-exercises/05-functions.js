// Exercises: Functions
console.log("FUN FUN FUNCTIONS");
// Create a function that adds two numbers together
// The function will log the result to console
function add(num1, num2) {
	console.log(num1 + num2);
}




// EXERCISE: Simple Greeting

// Write a function that when called, simply logs your name to the screen like so "Hello XYZ!"
// Don't forget to execute the function
function greet() {
	console.log("Hello Betty");
}


// EXERCISE: Universal Greeting
// Write a function that takes one argument and logs anyone's name like so: "Hello XYZ!". 
function universalGreeting(name) {
	console.log("Hello " + name);
	console.log(`Bonjour ${name}`);
}


// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// The function should calculate the 2 possible ages based on those years.
// It should output the result to the screen like so: "You are NN years old."
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in!
function calculateAge1(birth, current) {
	var age = current - birth;
	console.log(`You are ${age} years old.`);
}

function calculateAge2(birth, current) {
	console.log(`You are ${current - birth} years old.`);
}

// Calling/Executing the function
calculateAge1(1988, 2019);
calculateAge1(1902, 2019);
calculateAge1(1954, 2019);

// BONUS - to get Javascript to calculate the current year
function calculateAge3(birth) {
	var today = new Date;

	console.log(`You are ${today.getFullYear() - birth} years old.`)
}

calculateAge3(1902);





