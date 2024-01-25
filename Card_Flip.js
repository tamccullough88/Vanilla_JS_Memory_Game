let startButton = document.querySelector(".startButton")
let gameGrid = document.querySelector(".game-board")
let firstCard, secondCard;
const card = document.querySelectorAll(".card")
let score = 0
document.querySelector(".score").textContent = score
let flippedCard = false
let turns = 16
document.querySelector(".turns").textContent = turns

lockBoard = false


//function to start the game on start button click

function startGame() {
    document.querySelector(".start").style.display = 'none'
    gameGrid.style.display = 'grid'

}

//function to end game after x number of turns

function endGame() {


    if (turns === 0) {
        document.querySelector(".restart").style.display = 'flex'
        gameGrid.style.display = 'none';
        loserSound()
    }
    

}

function winner() {
    if (score === 8) {
        document.querySelector(".winner").style.display = 'flex'
        gameGrid.style.display = 'none'
    }
    resetGameBoard()
    winnerSound()
}

//function to restart game

function restartGame() {

    let flip = document.querySelectorAll('.card.flip');
    for (let i = 0; i < flip.length; i++) {
        card.forEach(card => card.addEventListener('click', cardFlip))
        flip[i].classList.remove('flip')
    }

    shuffle();
    score = 0;
    document.querySelector(".score").textContent = score;
    turns = 16;
    document.querySelector(".turns").textContent = turns;
    document.querySelector(".restart").style.display = 'none';
    document.querySelector(".winner").style.display = 'none';
    gameGrid.style.display = 'grid';
}



// function to flip cards. See citation 1

/* * Title: Memory Game In Vanilla JavaScript * Author:Ferreira,  M * Date: 2018 * Code Version: v1 *  Availability: https://github.com/code-sketch/memory-game/blob/master/video-11/scripts.js * */

/* * Title: Creating a Memory Card Game with HTML, CSS, and JavaScript * Author: Nagy, A * Date: 2023 * Code Version: v1 *  Availability: https://github.com/javascriptacademy-stash/memory-card-game/blob/main/index.js* */


card.forEach(card => card.addEventListener('click', cardFlip));
function cardFlip() {
    if (lockBoard) return;
    if (this === firstCard) return;


    this.classList.add("flip")

    if (!flippedCard) {
        flippedCard = true
        firstCard = this;
        playSound()
        return;
    }

    secondCard = this;
    lockBoard = true;

    if (flippedCard === true) {
        turns--;
        document.querySelector(".turns").textContent = turns;
        playSound()
    }


    checkForMatch()
}

// functions to play sounds for card game

function playSound() {
    new Audio("Assets/flipcard-91468.mp3").play();
}

function winnerSound() {
    new Audio("Assets/game-bonus-144751.mp3").play();
}

function loserSound() {
    new Audio("Assets/080556_quotyou-losequot-88884.mp3").play()
}
function correctMatchSound() {
    new Audio("Assets/interface-124464.mp3").play()
}
// function to reset the game board. see citation 2


/* * Title: Memory Game In Vanilla JavaScript * Author:Ferreira,  M * Date: 2018 * Code Version: v1 *  Availability: https://github.com/code-sketch/memory-game/blob/master/video-11/scripts.js * */

/* * Title: Creating a Memory Card Game with HTML, CSS, and JavaScript * Author: Nagy, A * Date: 2023 * Code Version: v1 *  Availability: https://github.com/javascriptacademy-stash/memory-card-game/blob/main/index.js* */

function resetGameBoard() {
    flippedCard = false
    lockBoard = false
    firstCard = null
    secondCard = null

}

//function to check for match, flip if no match, and disable flip if match

function checkForMatch() {
    let match = firstCard.dataset.type === secondCard.dataset.type

    if (match === true) {
        disable()
    } else {
        resetCard()
    };

    if (match === true) {
        score++;
        document.querySelector(".score").textContent = score;
        setTimeout(() => {
            correctMatchSound()
        }, 500)
        
    }

    if (score === 8) {
        setTimeout(() => {
            winner()
        }, 1000)
    } else {
        setTimeout(() => {
            endGame()
        }, 1000)
    }
}


//function to reset cards if no match. see citation 3

/* * Title: Memory Game In Vanilla JavaScript * Author:Ferreira,  M * Date: 2018 * Code Version: v1 *  Availability: https://github.com/code-sketch/memory-game/blob/master/video-11/scripts.js * */

/* * Title: Creating a Memory Card Game with HTML, CSS, and JavaScript * Author: Nagy, A * Date: 2023 * Code Version: v1 *  Availability: https://github.com/javascriptacademy-stash/memory-card-game/blob/main/index.js* */

function resetCard() {
    setTimeout(() => {
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        resetGameBoard()
    }, 1000);

}


//function to disable matching cards. see citation 4

/* * Title: Memory Game In Vanilla JavaScript * Author:Ferreira,  M * Date: 2018 * Code Version: v1 *  Availability: https://github.com/code-sketch/memory-game/blob/master/video-11/scripts.js * */

/* * Title: Creating a Memory Card Game with HTML, CSS, and JavaScript * Author: Nagy, A * Date: 2023 * Code Version: v1 *  Availability: https://github.com/javascriptacademy-stash/memory-card-game/blob/main/index.js* */


function disable() {
    firstCard.removeEventListener('click', cardFlip)
    secondCard.removeEventListener('click', cardFlip)
    resetGameBoard()
}

//function to shuffle cards. See citation number 5

/* * Title: Memory Game In Vanilla JavaScript * Author:Ferreira,  M * Date: 2018 * Code Version: v1 *  Availability: https://github.com/code-sketch/memory-game/blob/master/video-11/scripts.js * */


function shuffle() {
    card.forEach(card => {
        let random = Math.floor(Math.random() * 16);
        card.style.order = random;
    })
}

shuffle()


