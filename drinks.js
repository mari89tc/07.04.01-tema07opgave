const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");

fetch("https://tipsy-7609.restdb.io/rest/tipsy/" + id, {
  method: "get",
  headers: {
    "x-apikey": "63ee14b6478852088da68351",
  },
})
  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(tipsy) {
  console.log("tipsy " + tipsy);
  document.querySelector(".drinkname").textContent = tipsy.name;
  document.querySelector(".liquor").textContent = tipsy.liquor;
  document.querySelector(".taste").textContent = tipsy.taste;
  document.querySelector(".strenght").textContent = "Styrke : " + tipsy.strenght + "/5";
  document.querySelector(".difficulty").textContent = "Sværighedsgrad : " + tipsy.difficulty + "/5";
  document.querySelector(".recipe").textContent = tipsy.recipe + " hello";
  document.querySelector(".image-bigger").src = tipsy.image;
  console.log("her kommer objektet " + tipsy.ingredients);
  fordeling(tipsy.ingredients);
}

function fordeling(ingredients) {
  console.log("fordeling" + ingredients);
  ingredients.forEach(ingrediens);
}

function ingrediens(ing) {
  const template = document.querySelector("template").content;

  const copy = template.cloneNode(true);

  copy.querySelector(".ingrediens").textContent = ing.ingrediens;
  copy.querySelector(".amount").textContent = ing.amount + ing.type;

  document.querySelector("ul").appendChild(copy);
}
