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
}
  

