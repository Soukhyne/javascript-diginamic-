//declaration des variables
let input = document.getElementById("nom");
let form = document.getElementById("form");
let resultat = document.getElementById("resultat");
let value;

//ecoute de la recherche
form.addEventListener("submit", function (e) {
  e.preventDefault();
  value = input.value;
  console.log(value);
  resultat.innerHTML = "";

  fetch(`http://www.omdbapi.com/?apikey=f6e256e1&t=${value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.Poster);
      let poster = document.createElement("img");
      poster.setAttribute("src", data.Poster);
      poster.setAttribute("alt", data.Title);
      poster.setAttribute("id", "poster");
      resultat.appendChild(poster);
      let h1 = document.createElement("h1");
      h1.innerText = data.Title;
      resultat.appendChild(h1);
      let p1 = document.createElement("p");
      p1.innerText = `Date de sortie : ${data.Released}`;
      resultat.appendChild(p1);
    });
});
