 
const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get("search");

if (searchQuery) {
  // Set the search input value to the query parameter
  document.getElementById("search").value = searchQuery;

  // Fetch the trip cards
  const tripCards = document.querySelectorAll(".trip-card");
  tripCards.forEach((card) => {
    const title = card.querySelector(".trip-title").textContent.toLowerCase();
    const description = card.querySelector(".trip-description").textContent.toLowerCase();

    // Show or hide the card based on the search query
    if (title.includes(searchQuery.toLowerCase()) || description.includes(searchQuery.toLowerCase())) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
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
       card.style.display="none"
    }
  });
});
