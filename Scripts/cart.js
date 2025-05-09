document.addEventListener("DOMContentLoaded", function () {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cart-total");
  const paymentModal = document.getElementById("payment-modal");
  const successAnimation = document.getElementById("success-animation");

  function updateCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartContainer.innerHTML += `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-info">
              <h4>${item.title}</h4>
            </div>
            <div class="btninc">
              <button class="decrease" data-index="${index}">-</button>
              <span>${item.quantity}</span>
              <button class="increase" data-index="${index}">+</button>
            </div>
            <div class="price-cart">
              <p>$${item.price.toFixed(2)}</p>
            </div>
            <span class="remove-item" data-index="${index}">
              <img src="../Images/remove.png" alt="Remove" class="remove-btn">
            </span>
          </div>
        `;
      });
    }

    cartTotal.textContent = `$${total.toFixed(2)}`;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
  }

  cartContainer.addEventListener("click", function (e) {
    const index = e.target.dataset.index;
    if (e.target.classList.contains("increase")) {
      cart[index].quantity++;
    } else if (e.target.classList.contains("decrease")) {
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
      } else {
        cart.splice(index, 1);
      }
    } else if (e.target.classList.contains("remove-item") || e.target.parentElement.classList.contains("remove-item")) {
      cart.splice(index, 1);
    }
    updateCart();
  });

  document.getElementById("clear-cart").addEventListener("click", function () {
    localStorage.removeItem("cart");
    cart = [];
    updateCart();
  });

  document.getElementById("checkout-btn").addEventListener("click", function () {
    if (cart.length === 0) {
      alert("Your cart is empty. Add items before checkout!");
    } else {
      paymentModal.style.display = "block";
    }
  });

  document.getElementById("payment-form").addEventListener("submit", function (e) {
    e.preventDefault();
    paymentModal.style.display = "none";
    successAnimation.style.display = "block";
    setTimeout(() => {
      successAnimation.style.display = "none";
      localStorage.removeItem("cart");
      window.location.href = "../Files/home.html";
    }, 3000);
  });

  window.addEventListener("click", function (e) {
    if (e.target === paymentModal) {
      paymentModal.style.display = "none";
    }
  });

  updateCart();
});
