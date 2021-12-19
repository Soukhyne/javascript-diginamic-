function controleTab(array) {
  let isArrayOk = true;
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      return console.log((isArrayOk = false));
    }
  }
  return console.log(isArrayOk);
}

controleTab([1, 2, 3, 4, 5]);
controleTab([1, 2, 3, 4, "toto"]);
controleTab([]);
