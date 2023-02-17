fetch("")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(drinks) {
  drinks.forEach(showProduct);
}

function showProduct(tipsy) {
  const template = document.querySelector("#tipsytemplate").content;

  const copy = template.cloneNode(true);

  copy.querySelector("#productname").textContent = product.productdisplayname;
  copy.querySelector(".card .image").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".read-more").setAttribute("href", `product.html?id=${product.id}`);

  //   //   if (product.discount) {
  //   //     var originalPrice = product.price;
  //   //     var discountPercentage = product.discount;
  //   //     var newprice = originalPrice * (discountPercentage / 100);
  //   //     copy.querySelector("#newprice").textContent = newprice + " kr" + " " + discountPercentage + "% off";
  //   //     copy.querySelector("#price").remove("");
  //   //   }

  //   //   if (product.soldout) {
  //   //     copy.querySelector("section").classList.add("soldOut");
  //   //   }

  document.querySelector("main").appendChild(copy);
}
