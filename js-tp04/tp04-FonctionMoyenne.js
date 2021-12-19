function moyenne(array) {
  let total = 0;
  console.log(array.length);
  if (array.length === 0) {
    return console.log("La moyenne est de 0");
  }
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      return console.log("Un élément du tableau n'est pas un nombre");
    }
    total += array[i];
  }
  return console.log("La moyenne est de " + total / array.length);
}

moyenne([1, 2, 3, 4, 5]);
moyenne([1, 2, 3, 4, "toto"]);
moyenne([]);
