fetch("https://tipsy-7609.restdb.io/rest/tipsy", {
  method: "get",
  headers: {
    "x-apikey": "63ee14b6478852088da68351",
  },
})
  .then((res) => res.json())
  .then(showProducts);

function showProduct(product) {
  const template = document.querySelector("#tipsytemplate").content;

  const copy = template.cloneNode(true);

  copy.querySelector(".drinkname").textContent = tipsy.name;
  copy.querySelector(".strenght").textContent = "Styrke : " + tipsy.strenght + "/5";
  copy.querySelector(".difficulty").textContent = "Sværighedsgrad : " + tipsy.difficulty + "/5";

  copy.querySelector(".image").src = tipsy.image;

  // copy.querySelector(".read-more").setAttribute("href", `tipsy.html?id=${tipsy.id}`);

  //   if (product.discount) {
  //     var originalPrice = product.price;
  //     var discountPercentage = product.discount;
  //     var newprice = originalPrice * (discountPercentage / 100);
  //     copy.querySelector("#newprice").textContent = newprice + " kr" + " " + discountPercentage + "% off";
  //     copy.querySelector("#price").remove("");
  //   }

  //   if (product.soldout) {
  //     copy.querySelector("section").classList.add("soldOut");
  //   }

  document.querySelector("main").appendChild(copy);
}
