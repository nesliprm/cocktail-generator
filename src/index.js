document
  .querySelector("#cocktail-form")
  .addEventListener("submit", generateCocktail);

function generateCocktail(event) {
  event.preventDefault();
  document.querySelector("#cocktail-recipe").innerHTML =
    "generating a cocktail...";
}
