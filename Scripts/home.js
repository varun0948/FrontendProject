function viewProduct(product) {
  const productDetails = {
    title: product.querySelector(".productTitle").innerText,
    desc: product.querySelector(".productDesc").innerText,
    price: product.querySelector(".productPrice").innerText,
    image: product.querySelector("img").src,
  };

  localStorage.setItem("selectedProduct", JSON.stringify(productDetails));
  window.location.href = "product.html";
}
function addToCart(id, title, desc, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existingProduct = cart.find((product) => product.id === id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ id, title, desc, price, image, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
  alert("Product added to cart!");
}

function updateCartBadge() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalCount = cart.reduce((sum, product) => sum + product.quantity, 0);
  let cartCountElement = document.querySelector(".cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = totalCount;
  }
}

updateCartBadge();
document.addEventListener("DOMContentLoaded", updateCartBadge);
