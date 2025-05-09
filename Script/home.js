 
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