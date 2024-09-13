let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

let score = 20;
let highScore = 0;

// this is for the DRY principle
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".guess").value = "";
  (document.querySelector(".number").style.width = "15rem"),
    (document.querySelector(".score").textContent = 20);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guesing...";
  document.querySelector(".number").textContent = "?";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No guess❗❗❗";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct ✔ GOOD OF YOU 🖐";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#20b342";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " Too high 📈";

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
