document.addEventListener("DOMContentLoaded", () => {
  const trips = {
    europe: {
      title: "Explore Europe",
      subtitle: "7-Day journey through Europe's iconic cities and landscapes.",
      image: "../Images/europe/europe.jpg",
      price: "€2,500 per person",
      description:
        "Experience the rich history, diverse cultures, and stunning architecture of Europe's top destinations including Paris, Rome, and Barcelona.",
    },
    switerzland: {
      title: "Discover Switzerland",
      subtitle: "Experience Alpine beauty and Swiss charm.",
      description:
        "Enjoy pristine lakes, towering Alps, and quaint villages in Switzerland. Hike scenic trails, taste world-famous Swiss chocolates, and explore cosmopolitan cities like Zurich and Geneva.",
      price: "CHF 3,200 per person",
    },
  };

  const params = new URLSearchParams(window.location.search);
  const tripKey = params.get("trip") || "switerzland";
  const trip = trips[tripKey];

  if (!trip) {
    document.getElementById(
      "bookingContent"
    ).innerHTML = `<h2>Trip not found!</h2>`;
    return;
  }

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
        
        <label for="text">Mobile No.</label>
        <input type="text" id="number"  minlength= "10" maxlength= "10" required />

        <label for="travelDate">Preferred Travel Date</label>
        <input type="date" id="travelDate" required />

        <label for="numPeople">Number of People</label>
        <input type="number" id="numPeople" min="1"   required />

        <label for="specialRequests">Special Requests</label>
        <textarea id="specialRequests"  rows="4" placeholder="Any special requests (optional)..."></textarea>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  `;

  // Insert the booking content into the page
  document.getElementById("bookingContent").innerHTML = bookingContent;

  // Handle form submission
  document.getElementById("bookingForm").addEventListener("submit", (e) => {
    e.preventDefault();

    
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const travelDate = document.getElementById("travelDate").value;
    const numPeople = document.getElementById("numPeople").value;
    const specialRequests = document.getElementById("specialRequests").value;

    // Show confirmation (You could also send this data to a server here)
    alert(`
      Booking Confirmed!

      Name: ${fullName}
      Email: ${email}
      Travel Date: ${travelDate}
      Number of People: ${numPeople}
      Special Requests: ${specialRequests || "None"}
    `);

    // Optionally redirect to a "thank you" page or send an email.
    // window.location.href = "/thank-you.html"; // Or any other action you'd like.
  });
});
