document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tripKey = params.get("trip");

  fetch("../Data/trips.json")
    .then((res) => res.json())
    .then((trips) => {
      const trip = trips[tripKey];

      if (!trip) {
        document.getElementById(
          "bookingContent"
        ).innerHTML = `<h2>Trip not found!</h2>`;
        return;
      }
      renderBookingPage(trip);
    })
    .catch((err) => {
      console.error("Error loading trips:", err);
      document.getElementById(
        "bookingContent"
      ).innerHTML = `<h2>Error loading trip data.</h2>`;
    });
});

function renderBookingPage(trip) {
  const bookingContent = `
    <div class="booking-container">
      <h2>Book Your Trip: ${trip.title}</h2>

      <div class="trip-summary">
        <h3>Trip Details</h3>
        <p><strong>Title:</strong> ${trip.title}</p>
        <p><strong>Subtitle:</strong> ${trip.subtitle}</p>
        <p><strong>Description:</strong> ${trip.description}</p>
        <p><strong>Price:</strong> ${trip.price}</p>
      </div>

      <form class="booking-form" id="bookingForm">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" required />

        <label for="email">Email Address</label>
        <input type="email" id="email" required />
        
        <label for="number">Mobile No.</label>
        <input type="text" id="number" minlength="10" maxlength="10" required />

        <label for="travelDate">Preferred Travel Date</label>
        <input type="date" id="travelDate" required />

        <label for="numPeople">Number of People</label>
        <input type="text" id="numPeople" min="1" required />

        <label for="specialRequests">Special Requests</label>
        <textarea id="specialRequests" rows="4" placeholder="Any special requests (optional)..."></textarea>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  `;

  document.getElementById("bookingContent").innerHTML = bookingContent;

  document.getElementById("bookingForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const bookingTable = JSON.parse(localStorage.getItem("bookingTable")) || [];
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const travelDate = document.getElementById("travelDate").value;
    const numPeople = document.getElementById("numPeople").value;
    const specialRequests = document.getElementById("specialRequests").value;

    bookingTable.push({
      fullName,
      email,
      number,
      travelDate,
      numPeople,
      specialRequests,
      tripTitle: trip.title,
      tripPrice: trip.price,
    });

    localStorage.setItem("bookingTable", JSON.stringify(bookingTable));

    alert(`
      Booking Confirmed!
      Name: ${fullName}
      Email: ${email}
      Mobile: ${number}
      Travel Date: ${travelDate}
      Number of People: ${numPeople}
      Special Requests: ${specialRequests || "None"}
    `);

    window.location.href = "home.html";
  });
}
