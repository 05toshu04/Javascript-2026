// Online Exam / Quiz System
// alert(), prompt() and confirm() are used to interact with the student.


// 1️ alert()
// Used to show an important message to the user.

alert("Your online exam is about to begin!");


// 2️ prompt()
// Used to take input from the user.
// prompt() returns the user's input as a STRING.

let studentName = prompt("Enter your name:");

console.log("Student Name:", studentName);


// prompt() with a default value
// The second argument is an optional default value.

let subject = prompt(
    "Enter the subject you are going to attempt:",
    "JavaScript"
);

console.log("Subject:", subject);


// 3️ confirm()
// Used when we want the user to make a decision.


let startExam = confirm(
    "Are you ready to start the exam?"
);


// Using the returned value
if (startExam === true) {

    alert("Exam started! All the best.");
    console.log("Exam Status: Started");

} else {

    alert("Exam cancelled.");
    console.log("Exam Status: Not Started");

}