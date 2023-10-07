# JS-P1BG-Thomas

JS game for Thrive DX Software Development Bootcamp.

using https://www.freecodecamp.org/news/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae/ for reference and ideas on how to code.

using https://dev.to/javascriptacademy/creating-a-memory-card-game-with-html-css-and-javascript-57g1 as more inspiration on code and styling.

in playgroud 2, I used the Fisher Yates shuffle algorithm.

I plan on rewriting completely based on what I learn from the two tutorials.

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

cards and winning screen were made in canva, all graphics are from canva.

1. cardFlip function: I found this function in several places for flipping cards. all were nearly identical. 2 locations that I saw were https://www.freecodecamp.org/news/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae/ and https://dev.to/javascriptacademy/creating-a-memory-card-game-with-html-css-and-javascript-57g1 . I can't take full credit for the full function, but I did update and add the turns decrese code to it.

2. resetGameBoard function: This is another one that is a frequent among card flip games. different variations to accomplish the same thing. I added my own version of it since it worked better for me this way. https://www.freecodecamp.org/news/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae/ had it lumped together for null and false.

3. resetCard function. This is another one where peope had their own version of the same thing.

4. need to cite because I saw it in the two origin sites and more.

function on line 155, shuffle function, was foud in a few different locations for shuffling. first place I saw and pulled the idea from was https://www.freecodecamp.org/news/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae/
