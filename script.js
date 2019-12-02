const feedback = document.getElementById('feedback');
const attempts = document.getElementById('attempts');
const guessInput = document.querySelector('.guessInput');
const inputBox = document.getElementById('inputBox');
const guesses = document.getElementById('guesses');
let totalAttemps = 0

let randomNumber = generate();



function generate() {
    return Math.floor(Math.random() * 100);
}


function checkNumber(e) {
    e.preventDefault()
    const number = Number(inputBox.value)
    console.log(typeof number);
    if (number === randomNumber) {
        feedback.innerHTML = 'Correct!'
        console.log('Correct!')
        guesses.innerHTML += ` ${number} `
    } else if (number <= randomNumber) {
        feedback.innerHTML = 'Too low!'
        console.log('Too low!')
        guesses.innerHTML += ` ${number} `
    } else if (number >= randomNumber) {
        feedback.innerHTML = 'Too high!'
        console.log('Too high!')
        guesses.innerHTML += ` ${number} `
    } else
        alert("please insert a number");
    totalAttemps++




    attempts.innerHTML = `Number of previous attempts: ${totalAttemps}`

    this.reset();
};
guessInput.addEventListener('submit', checkNumber);