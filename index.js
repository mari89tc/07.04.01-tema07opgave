fetch("https://tipsy-7609.restdb.io/rest/tipsy?max=3", {
  method: "get",
  headers: {
    "x-apikey": "63ee14b6478852088da68351",
  },
})
  .then((res) => res.json())
  .then(showProducts);

function showProducts(drinks) {
  drinks.forEach(showProduct);
}

function showProduct(tipsy) {
  const template = document.querySelector("#tipsytemplate").content;

  const copy = template.cloneNode(true);

  copy.querySelector(".drinkname").textContent = tipsy.name;
  copy.querySelector(".strenght").textContent = "Styrke : " + tipsy.strenght + "/5";
  copy.querySelector(".difficulty").textContent = "Sværighedsgrad : " + tipsy.difficulty + "/5";

  copy.querySelector(".image").src = tipsy.image;

  copy.querySelector(".read-more").setAttribute("href", `drinks.html?_id=${tipsy._id}`);
  document.querySelector("main section").appendChild(copy);
}
