const wordText = document.querySelector('.word'),
// hintText = document.querySelector('.hint span'),
inputField = document.querySelector('input'),
refreshBtn = document.querySelector('.refresh-word'),
checkBtn = document.querySelector('.check-word');

let correctWord;

const initGame = () => {
  let randomObj = perse[Math.floor(Math.random() * perse.length)]; // getting random object from words
  let wordArray = randomObj.word.split(""); // splitting each letter of random word
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // getting random number
    let temp = wordArray[i];
    wordArray[i] = wordArray[j];
    wordArray[j] = temp;
    console.log(wordArray);
  }
  wordText.innerText = wordArray.join(""); // passing shuffled word a word text
  // hintText.innerText = randomObj.hint; // passing random object hint as hint text
  correctWord = randomObj.word.toLocaleLowerCase(); // passing random word to correctWord
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
  console.log(wordArray, randomObj.word);
}
initGame();

const checkWord = () => {
  let userWord = inputField.value.toLocaleLowerCase(); // getting user value
  if (!userWord) {
    return alert(`Please enter a word to check`);
  }
  if (userWord !== correctWord) {
    return alert(`Oops! ${userWord} is not a correct word`)
  } else {
    alert(`Congrats! ${userWord.toUpperCase()} is a correct word`);
    initGame();
  };
}

refreshBtn.addEventListener('click', initGame);
checkBtn.addEventListener('click', checkWord);