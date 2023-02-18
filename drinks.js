const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");

fetch("https://tipsy-7609.restdb.io/rest/tipsy/" + id, {
  method: "get",
  headers: {
    "x-apikey": "63ee14b6478852088da68351",
  },
})
  //   .then((response) => response.json())
  //   .then((data) => showProducts(data));

  // function showProducts(tipsy) {
  //   console.log("tipsy " + tipsy);
  //   document.querySelector(".drinkname").textContent = tipsy.name;
  //   document.querySelector(".liquor").textContent = tipsy.liquor;
  //   document.querySelector(".taste").textContent = tipsy.taste;
  //   document.querySelector(".strenght").textContent = "Styrke : " + tipsy.strenght + "/5";
  //   document.querySelector(".difficulty").textContent = "Sværighedsgrad : " + tipsy.difficulty + "/5";
  //   document.querySelector(".recipe").textContent = tipsy.recipe + " hello";
  //   document.querySelector(".image").src = tipsy.image;

  //   function ingredienser() {
  //     ingredienser.forEach();

  //     function ingrediens(ing) {
  //       const template = document.querySelector(".allingrediens").content;

  //       const copy = template.cloneNode(true);

  //       copy.querySelector(".ingrediens").textContent = ingrediens.ingrediens;
  //       copy.querySelector(".amount").textContent = ingrediens.amount + ingrediens.type;

  //       document.querySelector("ul").appendChild(copy);
  //     }
  //   }
  // }

  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(tipsy) {
  console.log("tipsy " + tipsy);
  document.querySelector(".drinkname").textContent = tipsy.name;
  document.querySelector(".liquor").textContent = tipsy.liquor;
  document.querySelector(".taste").textContent = tipsy.taste;
  document.querySelector(".strenght").textContent = "Styrke : " + tipsy.strenght + "/5";
  document.querySelector(".difficulty").textContent = "Sværighedsgrad : " + tipsy.difficulty + "/5";
  document.querySelector(".recipe").textContent = tipsy.recipe;
  document.querySelector(".image").src = tipsy.image;

  // if (Array.isArray(tipsy.ingredienser)) {
  //   ingredienser(tipsy.ingredienser);
  // } else {
  //   console.error("Ingredients is not an array.");
  // }
}

// function ingredienser(ingredienser) {
//   ingredienser.forEach(ingredients);
// }

// function ingredients(ing) {
//   console.log("nu kan vi vise alle ingredients");
//   const template = document.querySelector("template").content;

//   const copy = template.cloneNode(true);

//   copy.querySelector(".ingrediens").textContent = ing.ingredient;
//   copy.querySelector(".amount").textContent = ing.amount + ing.type;

//   document.querySelector("main").appendChild(copy);
// }
