const cards = document.querySelectorAll('.card');

function flipCards() {
    this.classList.toggle('flip')
}

cards.forEach(cards => cards.addEventListener('click', flipCards))