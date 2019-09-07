// Please fill out survey:
// ga.ca/survey-tor

console.log("We're in the home stretch!!");
// Reference to Web Events on MDN => https://developer.mozilla.org/en-US/docs/Web/Events


// ============================================
// ✏️ Let's practice the building blocks
// ============================================
// 🧠 Before we get started on making the ToDo Application work,
// we'll need to work on some final fundamental concepts like
// Browser Events. 
//
// 🧠 This is where you'll begin to see the concepts in 
// the JS Exercises start coming together
// 
// 🧠 Most importantly, the code we'll be writing in this section
// is for 🏀 Practice ONLY 🏀. That means, we'll be commenting out
// the code after we write it. 
//
// 🚫 TL;DR
// Comment out the previous exercise when starting the next one




// 🏀 1. Get the browser to write to the console when someone clicks anywhere in the document

// var tasks = document.getElementsByClassName('task');

// function taskClicked() {
// 	console.log(this.innerText);
// }

// for(var i = 0; i < tasks.length; i++) {

// 	tasks[i].addEventListener('click', function() {
// 		console.log(this.innerText);
// 	});

// }




// 🏀 2. Change the text of the h1 that displays the page title when someone clicks anywhere in the page



// 🏀 3. Display an alert printing the name of the task
//       when someone clicks any of the tasks
// Hint: We'll need to use `this` keyword
// Bonus: Come back and look at the `event` object, time permitting



// 🏀 4 => (Refactor code above)
// 4a. Write a function that displays an alert
// 4b. Run the function only when any task is clicked





// ============================================
// 🏁 Let's get down to business
// ============================================

// ✅ Now that we've put all the building blocks together ...
// Let's start working on the ToDo Application and get it
// to do what we set out to accomplish:
// 1️⃣ Application marks tasks as complete when clicked
// 2️⃣ Application can mark tasks as incomplete when clicked again
// 3️⃣ Application updates the count of completed tasks


// ✅ Write a function that updates the counter based on 
//    which tasks are completed
// Hint: Start with pseudo-coding

function updateCounter() {
	// 1. Get the Counter HTML element, store in variable
	var counterEle = document.getElementById('counter');

	// 2. Get the number of total tasks
	var totalTasks = document.getElementsByClassName('task').length;

	// 3. Get the number of completed tasks
	var completedTasks = document.getElementsByClassName('is-complete').length;

	// 4. Determine the number of remaining tasks (total minus completed)
	var remainingTasks = totalTasks - completedTasks;

	// 5. Update the inner text of the Counter HTML element to the number of remaining tasks
	counterEle.innerText = remainingTasks;
}


// ✅ Run the function you just wrote to update the counter
updateCounter();



// ✅ Add an event listener to each of the tasks which will 
//    toggle the 'is-complete' css class when clicked
// Hint: Start with pseudo-coding

// 1. Get all tasks HTML elements
var tasks = document.getElementsByClassName('task');

// 2. Add a CLICK event listener to every Task HTML Element
// 3. When a Task is CLICKED:
	// a) IF the task has "is-complete" class, remove "is-complete"
	// b) ELSE then add the class "is-complete"
for(var i = 0; i < tasks.length; i++) {

	tasks[i].addEventListener('click', function() {
		if(this.classList.contains('is-complete')) {
			this.classList.remove('is-complete');
		}
		else {
			this.classList.add('is-complete');
		}

		updateCounter();
	});
}


// ============================================
// 🤔 Other thoughts. Keep going!
// ============================================
// 🔘 How can you add more items to the list?
// 🔘 Instead of marking the items as `incomplete`, can
//    we just delete the task altogether?
// 🔘 Instead of counting the remaining tasks, can we count
//    how many tasks we've completed?


// ============================================
// 📝 Final notes
// ============================================
// How do we feel? What have we learned?
// - A lot! Our brains hurt!! 
// - Challenge: Go back and review our code in a few days 
//   from now, you'll be surprised how much more makes sense

// Where else can we write our code?
// - Use any text editors (e.g. Sublime, Atom, VS Code)
// - Create the files on your computer, the file extensions matter:
// - HTML extension => .html        (eg. about.html)
// - CSS extension => .css          (eg. about.css)
// - JavaScript extension => .js    (eg. about.js)