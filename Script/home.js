document.addEventListener("DOMContentLoaded", function () {
  const loginLink = document.getElementByIdz("login");

  const isLoggedIn = loggedInTable.some((user) => user.isLogin);

  if (isLoggedIn && loginLink) {
    loginLink.display = "none";
  }
  document.getElementById("search-btn").addEventListener("click", function () {
    const searchVal = document.getElementById("search").value.toLowerCase();
    const tripCards = document.querySelectorAll(".trip-card");
    
    tripCards.forEach(function (card) {
      const title = card.querySelector(".trip-title").textContent.toLowerCase();
      const description = card
      .querySelector(".trip-description")
      .textContent.toLowerCase();
      
      if (title.includes(searchVal) || description.includes(searchVal)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

});