function phraseMaj(string) {
  return console.log(
    string
      .split(" ")
      .map(function (word) {
        return word[0].toUpperCase() + word.substr(1);
      })
      .join(" ")
  );
}

phraseMaj("chaque mot aura la premiere lettre en majuscule");
