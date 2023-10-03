let startButton = document.querySelector(".startButton")
let gameGrid = document.querySelector(".game-board")
let firstCard, secondCard;
const card = document.querySelectorAll(".card")
let score = 0
document.querySelector(".score").textContent = score

lockBoard = false


//function to start the game on start button click

function startGame() {
    document.querySelector(".start").style.display= 'none'
    gameGrid.style.display = 'grid'

}

// function to flip cards

card.forEach(card => card.addEventListener('click', cardFlip));
function cardFlip() {
    this.classList.add("flip")

}


