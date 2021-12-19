function moyenne(array) {
  let total = 0;
  try {
    if (array.length === 0) throw "Le tableau est vide";

    for (let i = 0; i < array.length; i++) {
      try {
        if (isNaN(array[i])) throw "Un élément du tableau n'est pas un nombre";
      } catch (e) {
        return console.log(e);
      }
      total += array[i];
    }
    return console.log("La moyenne est de " + total / array.length);
  } catch (e) {
    return console.log(e);
  }
}

moyenne([1, 2, 3, 4, 5]);
moyenne([1, 2, 3, 4, "toto"]);
moyenne([]);
