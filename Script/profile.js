function showTab(tabId) {
  const contents = document.querySelectorAll(".tab-content");
  const tabs = document.querySelectorAll(".tab");

  contents.forEach((content) => content.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");

  tabs.forEach((tab) => tab.classList.remove("active"));
  event.target.classList.add("active");
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
  const userId = params.get("id");

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((user) => String(user.id) === userId);

  const upcomingContainer = document.getElementById("upcoming-trips");
  const bookings = JSON.parse(localStorage.getItem("bookings")) || {};
  const tripBookings = Array.isArray(bookings[userId]) ? bookings[userId] : [];

  if (user) {
    document.getElementById("userName").innerText = `Name: ${user.name}`;
    document.getElementById("userEmail").innerText = `Email: ${user.email}`;
    document.getElementById(
      "userPhone"
    ).innerText = `Phone: ${user.mobileNumber}`;
    document.getElementById("profileImage").src =
      user.profileImage || "../Images/default-profile.jpg";
  }

  if (upcomingContainer) {
    upcomingContainer.innerHTML = "";

    const validTrips = tripBookings.filter(
      (trip) => trip && trip.title && trip.image && trip.date
    );

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
      const icon = tripElement.querySelector(".icon")?.textContent;

      const trip = {
        title: title,
        image: "../Images/default.jpg",
        date: new Date().toISOString().split("T")[0],
      };

      if (!title) {
        alert("Invalid trip. Cannot book.");
        return;
      }

      const bookings = JSON.parse(localStorage.getItem("bookings")) || {};
      const userTrips = Array.isArray(bookings[userId]) ? bookings[userId] : [];

      userTrips.push(trip);
      bookings[userId] = userTrips;
      localStorage.setItem("bookings", JSON.stringify(bookings));

      alert("Trip booked successfully!");
      location.reload(); // Reload to update upcoming trips
    });
  });
});
