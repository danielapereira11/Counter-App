const countEl = document.querySelector("#count-el");
const addScoreBtn = document.querySelector("#like-btn");
const minusScoreBtn = document.querySelector("#dislike-btn");
const saveBtn = document.querySelector("#save-btn");
const clearBtn = document.querySelector("#clear-btn");
const opinionHeader = document.querySelector("#opinion-header");
const negCountEl = document.querySelector("#negative-count");
const posCountEl = document.querySelector("#positive-count");
let count = 0;
let negCountVal = 0;
let posCountVal = 0;

function addScore() {
  opinionHeader.innerHTML = "I like this!";
  count += 1;
  countEl.innerHTML = count;
  posCountVal += 1;
  posCountEl.innerHTML = posCountVal;
}

function removeScore() {
  opinionHeader.innerHTML = "I don't like this!";
  count -= 1;
  countEl.innerHTML = count;
  negCountVal += 1;
  negCountEl.innerHTML = negCountVal;
}

function saveScore() {
  localStorage.setItem("Count", JSON.stringify(count));
}

function clearScore() {
  count = 0;
  countEl.innerHTML = " ";
  opinionHeader.innerHTML = " ";
}

function consoleScore() {
  console.log(localStorage.getItem("Count"));
}

addScoreBtn.addEventListener("click", addScore);
minusScoreBtn.addEventListener("click", removeScore);
saveBtn.addEventListener("click", saveScore);
saveBtn.addEventListener("dblclick", consoleScore);
clearBtn.addEventListener("click", clearScore);

// add a function, that says that when we click on the button for like or dislike, the round number at the bottom flashes once for each click
