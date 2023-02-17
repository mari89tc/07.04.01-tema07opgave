const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("someurl", {
  method: "get",
  headers: {
    "x-apikey": "your-cors-api-key",
  },
})
  .then((e) => e.json())
  .then(showProduct);

function showProduct(drink) {
  document.querySelector(".description2 h2").textContent = product.brandname + ", " + product.productdisplayname;
  // document.querySelector(".description2 p").textContent = product.description;
  document.querySelector(".description2 .price").textContent = product.price;
  document.querySelector(".card2 h2").textContent = product.category + ", " + product.subcategory + ", " + product.articletype;
  document.querySelector(".card2 .image2").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
