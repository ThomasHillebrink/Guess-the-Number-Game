let randomNumber;
let feedback = document.getElementById('feedback');
let attempts = document.getElementById('attempts');
let guesses = document.getElementById('guesses');
let totalAttemps = 0

function generate() {
    randomNumber = Math.floor(Math.random() * 100);
}
generate();

function checkNumber(e) {
    if (e === randomNumber) {
        feedback.innerHTML = 'correct!'
        console.log('correct!')
    } else if (e <= randomNumber) {
        feedback.innerHTML = 'Too low!'
        console.log('Too low!')
    } else if (e >= randomNumber) {
        feedback.innerHTML = 'Too high!'
        console.log('Too high!')
    }
    totalAttemps++

    var para = document.createElement("P"); // Create a <p> node
    var t = document.createTextNode(e); // Create a text node
    para.appendChild(t); // Append the text to <p>
    document.getElementById("guesses").appendChild(para);

    attempts.innerHTML = `Number of previous attempts: ${totalAttemps}`

};
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    checkNumber(e)
  });