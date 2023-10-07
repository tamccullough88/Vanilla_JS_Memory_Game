# JS-P1BG-Thomas

JS game for Thrive DX Software Development Bootcamp.

To play, click start, then select the cards to find a match. Get all 8 matches to win. If you don't get all 8 matches in 16 turns, you lose. Select restart to try again.

Plan:

- create grid for cards - done
- place cards - done
- style grid - done
- style cards - done
- create function to flip cards - done
- creat function to shuffle cards(probable use fisher yates) - done(with easier function)
- create function to judge if cards match and hold if they do, reset if they don't - done
- create score increase function within card flip function - done
- create start/reset button/function - done
- make turns function decrease even when match is found - done
- create function to display "you won" graphic when game is won - done
- create function to display "you lost" when player reaches maximum number of
  turns - done
- create turns counter - done

extras

- create function to play card flip sound when cards are flipped

citation:

using https://www.freecodecamp.org/news/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae/ by Marina Ferreira for reference and ideas on how to code.

using https://dev.to/javascriptacademy/creating-a-memory-card-game-with-html-css-and-javascript-57g1 as more inspiration on code and styling.

in playgroud 2, I used the Fisher Yates shuffle algorithm.

I plan on rewriting completely based on what I learn from the two tutorials.

cards and winning screen were made in canva, all graphics are from canva.

card flip sound is from pixabay.com https://pixabay.com/sound-effects/flipcard-91468/

Winner sound is from universefield on pixabay https://pixabay.com/sound-effects/game-bonus-144751/

Losing game sound is from pixabay https://pixabay.com/sound-effects/080556-quotyou-losequot-88884/

Correct choice sound is from Universfield on pixabay https://pixabay.com/sound-effects/interface-124464/

1. cardFlip function: I found this function in several places for flipping cards. all were nearly identical. 2 locations that I saw were
   A. Ferreira, M (2018) Memory Game In Vanilla JavaScript [function flipCard() {
   if (lockBoard) return;
   if (this === firstCard) return;
   this.classList.add('flip');
   if (!hasFlippedCard) {
   // first click
   hasFlippedCard = true;
   firstCard = this;
   return;
   }
   // second click
   secondCard = this;
   checkForMatch();
   }] https://github.com/code-sketch/memory-game/blob/master/video-11/scripts.js

and

B. Nagy, A (2023)
[ function flipCard() {
if (lockBoard) return;
if (this === firstCard) return;
this.classList.add("flipped");
if (!firstCard) {
firstCard = this;
return;
}
secondCard = this;
score++;
document.querySelector(".score").textContent = score;
lockBoard = true;
checkForMatch();
}]

https://github.com/javascriptacademy-stash/memory-card-game/blob/main/index.js

2. resetGameBoard function: This is another one that is a frequent among card flip games. different variations to accomplish the same thing. I added my own version of it since it worked better for me this way.

Ferreira, M (2018) Memory Game In Vanilla JavaScript [function resetBoard() {
[hasFlippedCard, lockBoard] = [false, false];
[firstCard, secondCard] = [null, null];
}] https://github.com/code-sketch/memory-game/blob/master/video-11/scripts.js

and

Nagy, A (2023)
[ function resetBoard() {
firstCard = null;
secondCard = null;
lockBoard = false;
}] https://github.com/javascriptacademy-stash/memory-card-game/blob/main/index.js

3. resetCard function. This is another one where peope had their own version of the same thing.

Ferreira, M (2018) Memory Game In Vanilla JavaScript [function unflipCards() {
lockBoard = true;
setTimeout(() => {
firstCard.classList.remove('flip');
secondCard.classList.remove('flip');
resetBoard();
}, 1500);
}
] https://github.com/code-sketch/memory-game/blob/master/video-11/scripts.js

and

Nagy, A (2023)
[function unflipCards() {
setTimeout(() => {
firstCard.classList.remove("flipped");
secondCard.classList.remove("flipped");
resetBoard();
}, 1000);
}] https://github.com/javascriptacademy-stash/memory-card-game/blob/main/index.js

4. need to cite because I saw it in the two origin sites and more.

Ferreira, M (2018) Memory Game In Vanilla JavaScript [function disableCards() {
firstCard.removeEventListener('click', flipCard);
secondCard.removeEventListener('click', flipCard);
resetBoard();
}] https://github.com/code-sketch/memory-game/blob/master/video-11/scripts.js

and

Nagy, A (2023)
[function disableCards() {
firstCard.removeEventListener("click", flipCard);
secondCard.removeEventListener("click", flipCard);
resetBoard();
}] https://github.com/javascriptacademy-stash/memory-card-game/blob/main/index.js

5. function on line 155, shuffle function, was foud in a few different locations for shuffling. first place I saw and pulled the idea from was

Ferreira, M (2018) Memory Game In Vanilla JavaScript [(function shuffle() {
cards.forEach(card => {
let randomPos = Math.floor(Math.random() * 12);
card.style.order = randomPos;
});
})();] https://github.com/code-sketch/memory-game/blob/master/video-11/scripts.js

6. CSS and HTMl files were inspired by Marina Ferreira's css styling and updated for how I wanted the game to look and feel.

Ferreira, M (2018) Memory Game In Vanilla JavaScript
https://github.com/code-sketch/memory-game/blob/master/video-11/styles.css

Ferreira, M (2018) Memory Game In Vanilla JavaScript https://github.com/code-sketch/memory-game/blob/master/video-11/index.html
