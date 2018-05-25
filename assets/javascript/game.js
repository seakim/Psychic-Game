// RCB-HW3-PART1

var alphabet, rand, totalGuessLeft, wins, losses, guessed;

alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
rand = alphabet[Math.floor(Math.random() * alphabet.length)];

guessed = document.getElementById('guessed');
wins = document.getElementById('wins');
losses = document.getElementById('losses');
totalGuessLeft = document.getElementById('count');

guessedArray = [];
winsTemp = 0;
lossesTemp = 0;
totalGuessLeftTemp = 10;



console.log("the answer is: "+rand);
init();

document.body.addEventListener('keyup', function(event) {

    // if win, win++;
    if (event.key === rand) {
        winsTemp += 1;
        wins.textContent = winsTemp;
        reset(); 
    } else {

        // if totalGuessLeft === 0, losses++;
        if (totalGuessLeftTemp === 1) {
            lossesTemp += 1;
            losses.textContent = lossesTemp;
            reset();
        } else {

            // if no duplicate, push to array, totalGuessLeft--;
            if (guessedArray.indexOf(event.key) === -1) {
                guessedArray.push(event.key);
                guessed.textContent = guessedArray;
                totalGuessLeftTemp -= 1;
                totalGuessLeft.textContent = totalGuessLeftTemp;
            }
        }
    }
});


function init() {
    wins.textContent = winsTemp;
    losses.textContent = lossesTemp;
    totalGuessLeft.textContent = totalGuessLeftTemp;
}
function reset () {
    totalGuessLeftTemp = 10;
    totalGuessLeft.textContent = totalGuessLeftTemp;
    guessedArray = [];
    guessed.textContent = guessedArray;
}