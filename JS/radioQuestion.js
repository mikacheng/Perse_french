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
      setTimeout(function(){window.location.href='payQuestion.html';}, 1500);
    } else {
      document.getElementById('result').innerHTML = "Faux";
    }
  }
  if (randQ == 1) {
    if (answer == 2) {
      document.getElementById('result').innerHTML = "Vrai";
      setTimeout(function(){window.location.href='payQuestion.html';}, 1500);
    } else {
      document.getElementById('result').innerHTML = "Wrong";
    }
  }
  if (randQ == 2) {
    if (answer == 0) {
      document.getElementById('result').innerHTML = "Vrai";
      setTimeout(function(){window.location.href='payQuestion.html';}, 1500);
    } else {
      document.getElementById('result').innerHTML = "Wrong";
    }
  }
}

window.onload = () => {
  loadQuestion();
}

