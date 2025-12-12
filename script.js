let menuOpened = true;
let gameStarted = false;
const menu = document.querySelector("#menu");
const playground = document.querySelector("#playground");
const scoreboard = document.querySelector("#scoreboard");
const player1Label = document.querySelector("#player1Label");
const player2Label = document.querySelector("#player2Label");
const logInForm = document.querySelector("#logIn");
const nickNames = document.querySelectorAll(".nickname");

logInForm.addEventListener("submit", startGame);

const finishButton = document.querySelector("#stop");
finishButton.addEventListener("click", finishGame);

const playButton = document.querySelector("#play");
playButton.addEventListener("click", playGame);

function startGame(event) {
  event.preventDefault();
  menuOpened = false;
  gameStarted = true;
  let player1Name = document.querySelector("#player1Name").value;
  let player2Name = document.querySelector("#player2Name").value;
  menu.classList.add("dnone");
  playground.classList.remove("dnone");
  scoreboard.classList.remove("dnone");
  playground.classList.add("dflex");
  scoreboard.classList.add("dflex");
  player1Label.textContent = player1Name;
  player2Label.textContent = player2Name;
  document.querySelector("#scoreboardPlayer1").textContent = player1Name;
  document.querySelector("#scoreboardPlayer2").textContent = player2Name;
}

function finishGame() {
  gameStarted = false;
  menuOpened = true;
  menu.classList.remove("dnone");
  menu.classList.add("dflex");
  playground.classList.add("dnone");
  scoreboard.classList.add("dnone");
  const scorePlayer1 = document.querySelector("#scorePlayer1");
  const scorePlayer2 = document.querySelector("#scorePlayer2");
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  console.log(scorePlayer1);
  console.log(scorePlayer2);
  const dice1 = document.querySelector("#dice1");
  const dice2 = document.querySelector("#dice2");
  dice1.classList.remove("dice_winner");
  dice2.classList.remove("dice_winner");
  nickNames[0].classList.remove("player_winner");
  nickNames[1].classList.remove("player_winner");
}

function playGame() {
  let dice1Number = Math.floor(Math.random() * 6); //dice 1 number
  console.log(dice1Number + ", dice 1 number is " + (dice1Number + 1));

  let dice2Number = Math.floor(Math.random() * 6); //dice 2 number
  console.log(dice2Number + ", dice 2 number is " + (dice2Number + 1));

  const dice1 = document.querySelector("#dice1");
  const dice2 = document.querySelector("#dice2");
  const scorePlayer1 = document.querySelector("#scorePlayer1");
  const scorePlayer2 = document.querySelector("#scorePlayer2");

  dice1.classList.remove("dice_winner");
  dice2.classList.remove("dice_winner");
  nickNames[0].classList.remove("player_winner");
  nickNames[1].classList.remove("player_winner");
  renderDice(dice1, dice1Number);
  renderDice(dice2, dice2Number);
  setTimeout(() => {
    if (dice1Number > dice2Number) {
      winDice(dice1, nickNames[0]);
      scorePlayer1.textContent = Number(scorePlayer1.textContent) + 1;
    } else if (dice1Number < dice2Number) {
      winDice(dice2, nickNames[1]);
      scorePlayer2.textContent = Number(scorePlayer2.textContent) + 1;
    } else {
      draw(dice1, dice2, nickNames[0], nickNames[1]);
      scorePlayer1.textContent = Number(scorePlayer1.textContent) + 1;
      scorePlayer2.textContent = Number(scorePlayer2.textContent) + 1;
    }
  }, 300);
}

function renderDice(dice, numberOfDots) {
  const diceRows = dice.querySelectorAll(".dice__row");
  const diceDots = dice.querySelectorAll(".dice__dot");
  diceRows.forEach((e) => e.classList.remove("center", "end"));
  diceDots.forEach((e) => e.classList.remove("display"));
  dice.classList.toggle("rotate");
  switch (numberOfDots) {
    case 0: //1
      diceRows[1].classList.add("center");

      diceDots[2].classList.add("display");
      break;
    case 1: // 2
      diceRows[2].classList.add("end");

      diceDots[0].classList.add("display");
      diceDots[5].classList.add("display");
      break;
    case 2: //3
      diceRows[1].classList.add("center");
      diceRows[2].classList.add("end");

      diceDots[0].classList.add("display");
      diceDots[2].classList.add("display");
      diceDots[5].classList.add("display");
      break;
    case 3: //4
      diceDots[0].classList.add("display");
      diceDots[1].classList.add("display");
      diceDots[4].classList.add("display");
      diceDots[5].classList.add("display");
      break;
    case 4: //5
      diceRows[1].classList.add("center");

      diceDots[0].classList.add("display");
      diceDots[1].classList.add("display");
      diceDots[2].classList.add("display");
      diceDots[4].classList.add("display");
      diceDots[5].classList.add("display");
      break;
    case 5: //6
      diceDots[0].classList.add("display");
      diceDots[1].classList.add("display");
      diceDots[2].classList.add("display");
      diceDots[3].classList.add("display");
      diceDots[4].classList.add("display");
      diceDots[5].classList.add("display");
      break;
    default:
      break;
  }
}

function winDice(dice, player) {
  dice.classList.add("dice_winner");
  player.classList.add("player_winner");
}

function draw(dice1, dice2, player1, player2) {
  dice1.classList.add("dice_winner");
  player1.classList.add("player_winner");
  dice2.classList.add("dice_winner");
  player2.classList.add("player_winner");
}

const player1DynamicName = document.querySelector("#player1DynamicName");
const player2DynamicName = document.querySelector("#player2DynamicName");
player1Name.addEventListener("input", (e) => {
  player1DynamicName.textContent = e.target.value;
});
player2Name.addEventListener("input", (e) => {
  player2DynamicName.textContent = e.target.value;
});
