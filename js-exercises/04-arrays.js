// Exercises: Arrays
console.log("hello world!")

// Create an array, store it in a variable

var luckyNumbers = [10, 5, 7, 8, 22];
                 // 0,  1, 2, 3, 4

var mixedArray = ['hello', 10, true, 'hai', [1, 2, 3], luckyNumbers];

// Getting or accessing values from our array
// Say the name of our array with its position number
luckyNumbers[1]


// Setting a new value
// To change/overwrite an existing value:
luckyNumbers[4] = 202;


// To add NEW values I have two options:
// Option 1: through its position #
luckyNumbers[5] = 76;

// Option 2: use the Push function
luckyNumbers.push(30);

// Tell us how many items are in an array
luckyNumbers.length // => 7
mixedArray.length // => 6



// EXERCISE: Your top movies

// Create an array that contains the titles of a few of your favourite movies.
var movies = ['mean girls', 'jaws', 'highschool musical 1', 'highschool musical 2', 'highschool muscial 3'];


// Print the amount of movies in the array
movies.length // => 5

// Select the movie that you saw most recently from the array and store that into a variable.
movies[3] // => highschool musical 3

// Log the sentence to the console: "The most recent movie I saw was <movie>"
console.log(`The most recent movie I saw was ${movies[3]}`)




// EXERCISE: Applying loops to Arrays
// Log the sentence to the console for EVERY movie in your list:
// "One of my top favourite movies is: <movie>"
// Hint: You'll end up with 4-5 console.log statements
console.log(`One of my top fav movie is: ${movies[0]}`);
console.log(`One of my top fav movie is: ${movies[1]}`);
console.log(`One of my top fav movie is: ${movies[2]}`);
console.log(`One of my top fav movie is: ${movies[3]}`);
console.log(`One of my top fav movie is: ${movies[4]}`);



// Using a for loop, perform the same operation as above
for(var i = 0; i < movies.length; i++) {
 console.log(`One of my top fav movie is: ${movies[i]}`);
}















