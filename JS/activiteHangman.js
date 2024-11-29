var programming_languages = [
	 "être", 
   "est", 
   "français", 
   "anglais", 
   "petit", 
   "grand", 
   "je", 
   "il", 
   "aimer", 
   "aime", 
   "et", 
   "elle", 
   "non", 
   "oui", 
   "bonjour", 
   "salut", 
   "je suis", 
   "et toi", 
   "comment dit on", 
   "je ne sais pas", 
   "encore", 
   "je ne comprends pas", 
   "faux", 
   "vrai", 
   "présent", 
   "triste", 
   "ça va", 
   "bien", 
   "mal", 
   "merci", 
   "au revoir", 
   "mais", 
   "le prix", 
   "le mot", 
   "la table", 
   "le sac", 
   "content", 
   "désolé", 
   "calme", 
   "malade", 
   "jeune", 
   "amusant", 
   "prochain", 
   "préféré", 
   "une chose", 
   "avoir", 
   "a", 
   "une idée", 
   "un animal", 
   "aussi", 
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
}

function generateButtons() {
  let buttonsHTML = "_'abcdefghijklmnopqrstuvwxyzéèêëçàáâ".split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = '../images/' + mistakes + '.png';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " * ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = '../images/0.png';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();