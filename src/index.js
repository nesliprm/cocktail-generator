document
  .querySelector("#cocktail-form")
  .addEventListener("submit", generateCocktail);

function displayCocktail(response) {
  console.log(response.data.answer);
  document.querySelector("#cocktail-recipe").innerHTML = response.data.answer;
}

function generateCocktail(event) {
  event.preventDefault();

  let userInput = document.querySelector("#cocktail-input");
  let apiKey = "040oaf210f6td0bbf39be33790d96a71";
  let prompt = `Display a IBA-certified cocktail recipe that has ${userInput.value} in it.`;
  let context =
    "Please give clear instructions and provide measurements both in oz and ml. List ALL the necessary ingredients. Format your answer in HTML with cocktail name in <h4> and in all capital letters, ingredients in <ul> with list-style-type: none, under title 'ingredients', and method in <ul> with list-style-type: decimal under title 'method'. Add the type of glassware to serve at the end, under title 'glassware'. Please add <br> when necessary. Don't include any images.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating...");

  new Typewriter("#cocktail-recipe", {
    strings: [
      "thinking...",
      "crafting...",
      "mixing...",
      "pouring...",
      "garnishing...",
    ],
    autoStart: true,
    delay: 20,
    cursor: null,
    loop: true,
  });

  axios.get(apiURL).then(displayCocktail);
}
