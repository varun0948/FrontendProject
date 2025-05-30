document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tripKey = params.get("trip");
  console.log(tripKey);

  fetch("../Data/trips.json")
    .then((res) => res.json())
    .then((trips) => {
      const trip = trips[tripKey];

      if (!trip) {
        document.getElementById(
          "tripContent"
        ).innerHTML = `<h2>Trip not found!</h2>`;
        return;
      }

      renderTrip(trip, tripKey);
    })
    .catch((err) => {
      console.error("Error loading trips:", err);
      document.getElementById(
        "tripContent"
      ).innerHTML = `<h2>Error loading trip data.</h2>`;
    });
});

function renderTrip(trip, tripKey) {
  const hero = document.getElementById("hero");
  hero.style.backgroundImage = `url('${trip.image}')`;
  hero.innerHTML = `
    <div class="overlay">
      <h1>${trip.title}</h1>
      <p>${trip.subtitle}</p>
    </div>
  `;

  document.getElementById("gallery").innerHTML = trip.images
    .map((img) => `<img src="${img}" class="gallery-img" />`)
    .join("");

  document.getElementById("gallery").addEventListener("click", (e) => {
    if (e.target.classList.contains("gallery-img")) {
      hero.style.backgroundImage = `url('${e.target.src}')`;
    }
  });

  document.getElementById("whyLove").innerHTML = `
    <h2>Why You'll Love This Trip</h2><p>${trip.description}</p>
  `;

  document.getElementById("itinerary").innerHTML = `
    <h2>Itinerary</h2>
    <div class="itinerary-day">
      ${trip.itinerary.map((day) => `<strong>${day}</strong>`).join("")}
    </div>
  `;

  document.getElementById("priceBox").innerHTML = `
    <div class="price-box">
      <h2>${trip.price}</h2>
      <p>${trip.inclusions}</p>
      <button class="book-btn"  id="bookNowBtn">Book Now</button>
    </div>
  `;

  document.getElementById("reviews").innerHTML = `
    <h2>What Our Travelers Say</h2>
    ${trip.reviews
      .map(
        (r) =>
          `<div class="review"><strong>${r.rating} – ${r.user}:</strong> ${r.comment}</div>`
      )
      .join("")}
  `;

  document.getElementById("mapSection").innerHTML = `
    <h2>Explore the Area</h2>
    <iframe src="${trip.mapEmbed}" width="100%" height="300" frameborder="0"></iframe>
  `;

  document.getElementById("related").innerHTML = `
    <h2>You Might Also Like</h2>
    <div class="related-destinations">
      ${trip.related
        .map((r) => `<div class="related-card">${r}</div>`)
        .join("")}
    </div>
  `;

  document.getElementById("socialSharing").innerHTML = `
    <h2>Share This Trip</h2>
    <button>Facebook</button>
    <button>Instagram</button>
    <button>Twitter</button>
    <button onclick="navigator.clipboard.writeText(window.location.href)">Copy Link</button>
  `;

  document.getElementById("bookNowBtn").addEventListener("click", () => {
    window.location.href = `../Files/booking.html?trip=${tripKey}`;
  });
}
