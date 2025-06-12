// PROFILE.JS - Clean and robust

function showTab(tabId, event) {
  const contents = document.querySelectorAll(".tab-content");
  const tabs = document.querySelectorAll(".tab");

  contents.forEach((content) => content.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");

  tabs.forEach((tab) => tab.classList.remove("active"));
  if (event && event.target) {
    event.target.classList.add("active");
  }
}

function editProfile() {
  const newName = prompt("Enter new name:");
  if (newName)
    document.getElementById("userName").textContent = `Name: ${newName}`;
}

function logout() {
  const userId = sessionStorage.getItem("loggedInUserId");
  const loggedInTable = JSON.parse(localStorage.getItem("loggedInTable")) || [];

  const updatedTable = loggedInTable.map((user) => {
    if (String(user.id) === String(userId)) return { ...user, isLogin: false };
    return user;
  });

  localStorage.setItem("loggedInTable", JSON.stringify(updatedTable));
  sessionStorage.removeItem("loggedInUserId");

  alert("Logged out successfully");
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  let userId = params.get("id") || sessionStorage.getItem("loggedInUserId");

  // User profile section
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((user) => String(user.id) === String(userId));

  if (user) {
    document.getElementById("userName").innerText = `Name: ${user.name}`;
    document.getElementById("userEmail").innerText = `Email: ${user.email}`;
    document.getElementById("userPhone").innerText = `Phone: ${user.mobileNumber}`;
    document.getElementById("profileImage").src =
      user.profileImage || "../Images/default-profile.jpg";
  }

  // UPCOMING TRIPS SECTION
  const upcomingContainer = document.getElementById("upcoming-trips");
  const bookings = JSON.parse(localStorage.getItem("bookings")) || {};
  const tripBookings = Array.isArray(bookings[userId]) ? bookings[userId] : [];

  // Defensive: filter only valid trips
  const validTrips = tripBookings.filter(
    (trip) =>
      trip &&
      typeof trip === "object" &&
      trip.title &&
      trip.image &&
      trip.date
  );

  // Remove broken trips from storage (one-time cleanup)
  if (tripBookings.length !== validTrips.length) {
    bookings[userId] = validTrips;
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }

  if (upcomingContainer) {
    // Always clear any existing DOM!
    upcomingContainer.innerHTML = "";

    if (validTrips.length === 0) {
      upcomingContainer.innerHTML = "<p>No upcoming trips booked yet.</p>";
    } else {
      validTrips.forEach((trip) => {
        const card = document.createElement("div");
        card.className = "trip-card";
        card.innerHTML = `
          <img src="${trip.image}" alt="${trip.title}" style="width: 100%; border-radius: 10px; height: 150px; object-fit: cover;">
          <h3>${trip.title}</h3>
          <p>Booked on: ${trip.date}</p>
        `;
        upcomingContainer.appendChild(card);
      });
    }
  }

  // WISHLIST FUNCTIONALITY
  document.querySelectorAll(".wishlist-item .remove").forEach((button) => {
    button.addEventListener("click", function () {
      const item = this.closest(".wishlist-item");
      if (item) {
        item.style.transition = "opacity 0.5s";
        item.style.opacity = 0;
        setTimeout(() => item.remove(), 300);
      }
    });
  });

  document.querySelectorAll(".wishlist-item .book").forEach((button) => {
    button.addEventListener("click", function () {
      const tripElement = this.closest(".wishlist-item");
      const title = tripElement.querySelector("h4")?.textContent;
      // Always use a fallback image if not present
      const image =
        tripElement.querySelector("img")?.src || "../Images/default.jpg";
      const date = new Date().toISOString().split("T")[0];

      if (!title) {
        alert("Invalid trip. Cannot book.");
        return;
      }

      const trip = { title, image, date };

      const bookings = JSON.parse(localStorage.getItem("bookings")) || {};
      const userTrips = Array.isArray(bookings[userId]) ? bookings[userId] : [];

      userTrips.push(trip);
      bookings[userId] = userTrips;
      localStorage.setItem("bookings", JSON.stringify(bookings));

      alert("Trip booked successfully!");
      location.reload();
    });
  });
});