let plusGrandeDate = function (date1, date2) {
  let dateNow = new Date();
  duree1 = dateNow - date1;
  duree2 = dateNow - date2;
  if (duree1 > duree2) {
    return console.log("La date la plus proche est la date 2, soit le ", date2);
  } else if (duree1 < duree2) {
    return console.log("La date la plus proche est la date 1, soit le ", date1);
  } else if (duree1 === duree2) {
    return console.log("Les dates sont les memes");
  }
};
plusGrandeDate(new Date(2018, 8, 22), new Date(2019, 8, 22));

let affichageAge = function (dateNaissance) {
  let dateNow = new Date();
  let annee = dateNow.getUTCFullYear() - dateNaissance.getUTCFullYear();
  let mois = dateNow.getMonth() - dateNaissance.getMonth() + 1;
  return console.log("Vous avez ", annee, " ans et ", mois, " mois");
};

affichageAge(new Date(1982, 9, 20));
