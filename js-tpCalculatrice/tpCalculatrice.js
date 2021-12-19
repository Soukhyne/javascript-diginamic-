//initialisation des variables
let resultat = document.getElementById("resultat");

//nombres
let zero = document.getElementById("zero");
let un = document.getElementById("un");
let deux = document.getElementById("deux");
let trois = document.getElementById("trois");
let quatre = document.getElementById("quatre");
let cinq = document.getElementById("cinq");
let six = document.getElementById("six");
let sept = document.getElementById("sept");
let huit = document.getElementById("huit");
let neuf = document.getElementById("neuf");
let virgule = document.getElementById("virgule");

//operateurs
let plus = document.getElementById("plus");
let moins = document.getElementById("moins");
let multiplie = document.getElementById("multiplie");
let divise = document.getElementById("divise");
let clear = document.getElementById("clear");
let total = document.getElementById("total");

//ecoute des clicks sur des nombres
zero.addEventListener("click", function () {
  resultat.value += "0";
});
un.addEventListener("click", function () {
  resultat.value += "1";
});
deux.addEventListener("click", function () {
  resultat.value += "2";
});
trois.addEventListener("click", function () {
  resultat.value += "3";
});
quatre.addEventListener("click", function () {
  resultat.value += "4";
});
cinq.addEventListener("click", function () {
  resultat.value += "5";
});
six.addEventListener("click", function () {
  resultat.value += "6";
});
sept.addEventListener("click", function () {
  resultat.value += "7";
});
huit.addEventListener("click", function () {
  resultat.value += "8";
});
neuf.addEventListener("click", function () {
  resultat.value += "9";
});
virgule.addEventListener("click", function () {
  resultat.value += ".";
});

//ecoute des clicks sur les operateurs
plus.addEventListener("click", function () {
  resultat.value += " + ";
});
moins.addEventListener("click", function () {
  resultat.value += " - ";
});
multiplie.addEventListener("click", function () {
  resultat.value += " * ";
});
divise.addEventListener("click", function () {
  resultat.value += " / ";
});

//ecoute du click sur total
total.addEventListener("click", function () {
  let resultAAfficher = resultat.value.split(" ");

  //verification : si deux operateur s'enchainent, on supprime le premier
  //dispatch dans 2 tableaux selon operateur et nombre
  let nombreACalculer = [];
  let operationAEffectuer = [];
  for (let i = 0; i < resultAAfficher.length; i++) {
    if (
      ((resultAAfficher[i] == "+" ||
        resultAAfficher[i] == "-" ||
        resultAAfficher[i] == "*" ||
        resultAAfficher[i] == "/") &&
        (resultAAfficher[i + 1] == "" ||
          resultAAfficher[i + 1] == "" ||
          resultAAfficher[i + 1] == "" ||
          resultAAfficher[i + 1] == "")) ||
      resultAAfficher[i] == "" ||
      resultAAfficher[i] == "" ||
      resultAAfficher[i] == "" ||
      resultAAfficher[i] == ""
    ) {
      //ne rien faire - operateur en double
    } else if (
      resultAAfficher[i] == "+" ||
      resultAAfficher[i] == "-" ||
      resultAAfficher[i] == "*" ||
      resultAAfficher[i] == "/"
    ) {
      operationAEffectuer.push(resultAAfficher[i]);
    } else {
      nombreACalculer.push(resultAAfficher[i]);
    }
  }

  //gestion des calculs
  for (let i = 0; i < nombreACalculer.length; i++) {
    switch (operationAEffectuer[i]) {
      case "+":
        nombreACalculer[i + 1] =
          parseFloat(nombreACalculer[i]) + parseFloat(nombreACalculer[i + 1]);
        break;
      case "-":
        nombreACalculer[i + 1] =
          parseFloat(nombreACalculer[i]) - parseFloat(nombreACalculer[i + 1]);
        break;
      case "*":
        nombreACalculer[i + 1] =
          parseFloat(nombreACalculer[i]) * parseFloat(nombreACalculer[i + 1]);
        break;
      case "/":
        nombreACalculer[i + 1] =
          parseFloat(nombreACalculer[i]) / parseFloat(nombreACalculer[i + 1]);
        break;
    }
  }

  //affichage du resultat
  resultat.value = nombreACalculer[nombreACalculer.length - 1];
});

//effacer le calcul
clear.addEventListener("click", function () {
  resultAAfficher = "";
  resultat.value = 0;
  nombreACalculer = [];
  operationAEffectuer = [];
});
