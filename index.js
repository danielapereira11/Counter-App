const countEl = document.querySelector("#count-el");
const addScoreBtn = document.querySelector("#like-btn");
const minusScoreBtn = document.querySelector("#dislike-btn");
const saveBtn = document.querySelector("#save-btn");
const clearBtn = document.querySelector("#clear-btn");
const opinionHeader = document.querySelector("#opinion-header");
let count = 0;

function addScore() {
  opinionHeader.innerHTML = "I like this!";
  count += 1;
  countEl.innerHTML = count;
}

function removeScore() {
  opinionHeader.innerHTML = "I don't like this!";
  count -= 1;
  countEl.innerHTML = count;
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
