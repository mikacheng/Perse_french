var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// complete blank questions
let question = [
  "J'_____ un frère et une soeur.",
  "La soeur de mon fils est ma ______.",
  "Nous _____ une grande maison.",
  "Tu _______ un animal?",
  "Je ______ très grande.",
  "Mes soeurs _____ dix ans.",

]

let réponse = [
  "ai",
  "fille",
  "avons",
  "as",
  "suis",
  "ont",
  
]

let randV = 0;


randV = Math.floor(Math.random()*question.length);
document.getElementById('inText').innerHTML = question[randV];
let randA = réponse[randV];

let game = () => {
  const user = document.getElementById("inText2").value;

  if (randA == user) {
    document.getElementById("ans").innerHTML = "Well done! Your answer is correct."
  } else {
    document.getElementById("ans").innerHTML = `Wrong! The answer was ${randA}.`
  }
  setTimeout(function(){window.location.href='familleQuestion.html';}, 3000);
}
  

// multiple choice questions
let questions = [
  "Tu as quel age?",
  "Comment tu t'appelle?",
  'How do you hide from a Zombie'
];

let option = [
  ["Je suis Français", "J'ai dix ans", "Je m'appelle Jasmine"],
  [ "Je s'appelle Jasmine", "Je t'appelle Jasmine", "Je m'appelle Jasmine"],
  ['Distract it with fire', 'Distract it with loud noises', 'Throw meat at it']
];

let randQ = 0;

let loadQuestion = () => {
  randQ = Math.floor(Math.random()*questions.length);
  document.getElementById('question').innerHTML = questions[randQ];

  for (let i = 0; i < 3; i++) {
    document.getElementById('oText'+i).innerHTML = option[randQ][i];
  }
}

let check = () => {
  let answer = 0;
  for (let i = 0; i < 3; i++) {
    if(document.getElementById('option'+i).checked) {
      answer = document.getElementById('option'+i).value;
    };
  }
  if (randQ == 0) {
    if (answer == 1) {
      document.getElementById('result').innerHTML = "Vrai";
      // setTimeout(function(){window.location.href='familleQuestion.html';}, 1500);
    } else {
      document.getElementById('result').innerHTML = "Faux";
    }
  }
  if (randQ == 1) {
    if (answer == 2) {
      document.getElementById('result').innerHTML = "Vrai";
      // setTimeout(function(){window.location.href='familleQuestion.html';}, 1500);
    } else {
      document.getElementById('result').innerHTML = "Wrong";
    }
  }
  if (randQ == 2) {
    if (answer == 0) {
      document.getElementById('result').innerHTML = "Vrai";
      // setTimeout(function(){window.location.href='familleQuestion.html';}, 1500);
    } else {
      document.getElementById('result').innerHTML = "Wrong";
    }
  }
}

window.onload = () => {
  loadQuestion();
}

