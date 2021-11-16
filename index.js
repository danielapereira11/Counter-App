const countEl = document.querySelector("#count-el");
const addScoreBtn = document.querySelector("#like-btn");
const minusScoreBtn = document.querySelector("#dislike-btn");
const saveBtn = document.querySelector("#save-btn");
const opinionHeader = document.querySelector("#opinion-header");
let count = 0;

function addScore() {
  opinionHeader.innerHTML = "I like this!";
}

function removeScore() {
  opinionHeader.innerHTML = "I don't like this!";
}

addScoreBtn.addEventListener("click", addScore);
minusScoreBtn.addEventListener("click", removeScore);
