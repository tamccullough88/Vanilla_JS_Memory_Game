const gameGrid = document.querySelector(".game-grid");

let cards = []

let firstCard, secondCard;

let lockBoard = false;

let score = 0

document.querySelector(".score").textContent = score;




// const cards = document.querySelectorAll('.card');

// function flipCards(){
//     this.classList.toggle('flip')
// }

// cards.forEach(cards => cards.addEventListener('click', flipCards))