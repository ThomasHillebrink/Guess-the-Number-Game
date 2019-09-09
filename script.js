let randomNumber;
const feedback = document.getElementById('feedback');
const attempts = document.getElementById('attempts');
let guesses = document.getElementById('guesses');
const searchInput = document.querySelector('.guessInput');
let totalAttemps = 0
let pastGuesses = []

var e=0;



function generate() {
    randomNumber = Math.floor(Math.random() * 100);
}
generate();

function checkNumber(e) {
    e.preventDefault()
    const number = (this.querySelector('[name=guess]').value)
console.log(number);
    if (number === randomNumber) {
        feedback.innerHTML = 'correct!'
        console.log('correct!')
    } else if (number <= randomNumber) {
        feedback.innerHTML = 'Too low!'
        console.log('Too low!')
    } else if (number >= randomNumber) {
        feedback.innerHTML = 'Too high!'
        console.log('Too high!')
    }
    totalAttemps++

    guesses.innerHTML += `<p>${number}<p>`


    attempts.innerHTML = `Number of previous attempts: ${totalAttemps}`
    
    this.reset();
};
searchInput.addEventListener('submit', checkNumber);
