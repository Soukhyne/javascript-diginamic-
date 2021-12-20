let varJson = {
  Nom: "Google",
  "Siège social": "Googleplex, Mountain View, California, United States",
  Fondateurs: [
    "Larry Page, né le 26/03/1973 à East Lansing, Michigan",
    "Sergey Brin, né le 21/08/1973 à Moscou, Union Soviétique",
  ],
  "Chiffre d’affaires en milliards de $": [
    {
      2008: 16.49,
    },
    { 2012: 37.97 },
    { 2016: 89.46 },
    { 2018: 136.2 },
    ,
  ],
};

console.log("Les fondateurs de Google sont :");
for (let i = 0; i < varJson.Fondateurs.length; i++) {
  console.log(varJson.Fondateurs[i]);
}

console.log("Le CA en milliards de la société sont de :");
for (let i = 0; i < 4; i++) {
  console.log(
    "pour l'année ",
    Object.keys(varJson["Chiffre d’affaires en milliards de $"][i]),
    Object.values(varJson["Chiffre d’affaires en milliards de $"][i])
  );
}
