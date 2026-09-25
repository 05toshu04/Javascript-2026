let choices = ["R", "P", "S"];

let yourPoints = 0;
let computerPoint = 0;

for (let i = 1; i <= 10; i++) {

    let select = prompt(
        `ROUND ${i}/10\n\nR → Rock\nP → Paper\nS → Scissor\n\nEnter your choice:`
    );

    select = select.toUpperCase();

    // Input validation
    if (select !== "R" && select !== "P" && select !== "S") {
        console.log("Invalid choice! Please choose R, P or S.");
        i--; // invalid input ko round nahi maanenge
        continue;
    }

    let randomChoice =
        choices[Math.floor(Math.random() * choices.length)];

    console.log(`\nYou      : ${select}`);
    console.log(`Computer : ${randomChoice}`);

    // Game logic
    if (select === randomChoice) {
        console.log("It's a Tie!");
    }

    else if (
        (select === "R" && randomChoice === "S") ||
        (select === "P" && randomChoice === "R") ||
        (select === "S" && randomChoice === "P")
    ) {
        console.log("You Win this round!");
        yourPoints++;
    }

    else {
        console.log("Computer Wins this round!");
        computerPoint++;
    }

    console.log(`Score → You: ${yourPoints} | Computer: ${computerPoint}`);
}


// Final Result
console.log("\n====================");
console.log("      GAME OVER");
console.log("====================");

console.log(`You      : ${yourPoints}`);
console.log(`Computer : ${computerPoint}`);

if (yourPoints > computerPoint) {
    console.log("🏆 You Won the Game!");
}
else if (yourPoints < computerPoint) {
    console.log("💻 Computer Won the Game!");
}
else {
    console.log("🤝 Match Tied!");
}




