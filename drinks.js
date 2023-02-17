const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://tipsy-7609.restdb.io/rest/tipsy", {
  method: "get",
  headers: {
    "x-apikey": "63ee14b6478852088da68351",
  },
})
  .then((res) => res.json())
  .then(showProducts);

function showProduct(tipsy) {
  document.querySelector(".drinkname").textContent = tipsy.name;
  document.querySelector(".strenght").textContent = "Styrke : " + tipsy.strenght + "/5";
  document.querySelector(".difficulty").textContent = "Sværighedsgrad : " + tipsy.difficulty + "/5";
  document.querySelector(".image").src = tipsy.image;
}
