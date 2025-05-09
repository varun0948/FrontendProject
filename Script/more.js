document.getElementById("search-btn").addEventListener("click", function () {
    const searchVAL = document.getElementById("search").value.toLowerCase();
    const tripCards = document.querySelectorAll(".trip-card");

    tripCards.forEach(function (card) {
      const title = card.querySelector(".trip-title").textContent.toLowerCase();
      const description = card.querySelector(".trip-description").textContent.toLowerCase();

      if (title.includes(searchVAL) || description.includes(searchVAL)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
 