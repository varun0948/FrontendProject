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

// document.addEventListener("DOMContentLoaded", function () {
//   const input = document.getElementById("search-input");
//   const categoryFilter = document.getElementById("category-filter");
//   const regionFilter = document.getElementById("region-filter");
//   const cards = document.querySelectorAll(".destination-card");

//   function filterCards() {
//     const searchQuery = input.value.toLowerCase();
//     const selectedCategory = categoryFilter.value.toLowerCase();
//     const selectedRegion = regionFilter.value.toLowerCase();

//     cards.forEach((card) => {
//       const title = card.getAttribute("data-title").toLowerCase();
//       const category = card.getAttribute("data-category").toLowerCase();
//       const region = card.getAttribute("data-region").toLowerCase();

//       const matchesTitle = title.startsWith(searchQuery);
//       const matchesCategory =
//         selectedCategory === "all" || category === selectedCategory;
//       const matchesRegion =
//         selectedRegion === "all" || region === selectedRegion;

//       if (matchesTitle && matchesCategory && matchesRegion) {
//         card.style.display = "block";
//       } else {
//         card.style.display = "none";
//       }
//     });
//   }

//   input.addEventListener("input", filterCards);
//   categoryFilter.addEventListener("change", filterCards);
//   regionFilter.addEventListener("change", filterCards);
// });
