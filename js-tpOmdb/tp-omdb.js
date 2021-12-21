//declaration des variables
let input = document.getElementById("nom");
let resultat = document.getElementById("resultat");
let button = document.getElementById("button");
let value;
let poster;
let h1;
let p1;

//ecoute de la recherche
button.addEventListener("click", function (e) {
  e.preventDefault();
  value = input.value;
  resultat.innerHTML = "";

  fetch(`http://www.omdbapi.com/?apikey=f6e256e1&s=${value}`)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.Search.length; i++) {
        poster = document.createElement("img");
        poster.setAttribute("src", data.Search[i].Poster);
        poster.setAttribute("alt", data.Search[i].Title);
        poster.setAttribute("class", "poster");
        resultat.appendChild(poster);
        h1 = document.createElement("h1");
        h1.setAttribute("class", "text-primary");
        h1.innerText = data.Search[i].Title;
        resultat.appendChild(h1);
        p1 = document.createElement("p");
        p1.innerText = `Année de sortie : ${data.Search[i].Year}`;
        resultat.appendChild(p1);
      }
    });
});
