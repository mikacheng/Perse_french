let term = document.querySelector(".term");
let definition = document.querySelector('.definition');
let checkButton = document.querySelector('.check');
let nextButton = document.querySelector('.next');

let words = {
  "to be / being": "être", 
  is: "est", 
  French: "français", 
  English: "anglais", 
  Small: "petit", 
  Big: "grand", 
  I: "je", 
  He: "il", 
  "to like, love": "aimer", 
  Loves: "aime", 
  And: "et", 
  She: "elle", 
  Non: "non", 
  Yes: "oui", 
  Hello: "bonjour", 
  Hi: "salut", 
  "I am": "je suis", 
  "and you": "et toi", 
  "how do you say": "comment dit on", 
  "I don’t know": "je ne sais pas", 
  Again: "encore", 
  "I don’t understand": "je ne comprends pas", 
  "false": "faux", 
  True: "vrai", 
  Present: "présent", 
  Sad: "triste", 
  "how is it going": "ça va", 
  "well, good": "bien", 
  Badly: "mal", 
  "thank you": "merci", 
  Goodbye: "au revoir", 
  But: "mais", 
  "price, prize": "le prix", 
  Word: "le mot", 
  Table: "la table", 
  Bag: "le sac", 
  "pleased, happy": "content", 
  Sorry: "désolé", 
  Calm: "calme", 
  "ill, sick": "malade", 
  Young: "jeune", 
  "amusing, entertaining": "amusant", 
  Next: "prochain", 
  Favourite: "préféré", 
  "a thing": "une chose", 
  "to have / having": "avoir", 
  Has: "a", 
  "an idea": "une idée", 
  "an animal": "un animal", 
  Also: "aussi",

}
 
data = Object.entries(words);
console.log(data);
console.log(getRandomTerm());


function getRandomTerm() {
  let topRandomTerm = data[Math.floor(Math.random() * data.length)]
  term.textContent = topRandomTerm[0];
  definition.textContent = topRandomTerm[1];
//   nextButton.addEventListener('click', function() {
//   console.log('You click the next button');
// })
}

checkButton.addEventListener('click', function() {
  definition.style.display = 'block';
  term.style.display = "none";
  // definition.style.zIndex = "+1";
});

nextButton.addEventListener('click', function() {
  getRandomTerm();
  definition.style.display = 'none';
  term.style.display = 'block';
});


