let term = document.querySelector(".term");
let definition = document.querySelector('.definition');
let checkButton = document.querySelector('.check');
let nextButton = document.querySelector('.next');

let words = {
  France: "La France",
  Russia: "La Russie",
  USA: "Les états units",
  Chili: "le Chili",
  countries: "les pays",
  Italy: "L'italie",
  Germany: "L'allemagne",
  Spain: "L'espagne",
  England: "L'angletterre",
  Wales: "Le pay de gales",
  Scotland: "L'écosse",
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


