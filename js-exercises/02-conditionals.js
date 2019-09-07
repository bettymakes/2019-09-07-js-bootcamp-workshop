// Exercises: conditional logic
console.log("Second Exercise!!");

10 > 5 // true
10 < 5 // false
10 <= 5 // false
10 >= 10 // true

"10" == 10 // true => we don't expect this to be true though! Loose equality, AVOID!!!
"10" === 10 // false => Strict equality, YASSSS! (this checks the data type in addition to the value)

10 != 10 // false => checks if something does NOT EQUAL to something else

// Weather Forecaster
// If the temp is greater than 30 deg, "It's too hawt 🔥!"
// If the temp is greater than 0 deg, "It's just right!"
// If the temp is 0 or less, "Brr! It's cold!"

// && AND operator
// || OR operator

var temp = 52;

if (temp > 30) {
	console.log("It's too hawt!!!");	
} 
else if(temp > 0 ) {
  console.log("It's just right!!");
}
else {
  console.log("Brr! It's too cold!!");
}


if (temp > 100) {
  if(temp > 50) {
    if (temp > 30) {

    }
  }
}




// EXERCISE: What number's bigger?

// Store your age in a variable
// Store your best friend's age in a variable
// Write an if/else statement that logs a message stating who is older
var myAge = 19;
var bestFriendAge = 92;

if (myAge > bestFriendAge) {
  console.log("I'm older than my bestie!");
}
else {
  console.log("My bestie is older than me!");
}


// EXERCISE: Who's allowed on the ride?

// Store a rider's age in a variable
// Store the rider's height (in cm) in a variable
// Write a "compound" if/else statement that checks if the rider meets the minimum requirements and logs a message to the console
// Rider's need to be 150cm tall, and at least 13 years of age
var riderAge = 18;
var riderHeight = 150;

if(riderAge >= 13) {
  if(riderHeight >= 150) {
    console.log("You can ride");
  } else {
    console.log("You don't meet this weird restriction lol. No riding for you.");
  }
} 
else {
  console.log("You can't ride.")
}


// Using AND/OR operators
if(riderAge >= 13 && riderHeight >= 150) {
  console.log("YOU CAN RIDE")
} 
else {
  console.log("You can't ride!");
}

















