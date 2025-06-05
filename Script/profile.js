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
  if (newName) document.getElementById("name").textContent = newName;
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

  console.log(userId);

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((user) => String(user.id) == userId);

  const upcomingContainer = document.getElementById("upcoming-trips");
  const bookings = JSON.parse(localStorage.getItem("bookings")) || {};
  const tripBookings = bookings[userId] || [];

  if (user) {
    document.getElementById("userName").innerText = `Name: ${user.name}`;
    document.getElementById("userEmail").innerText = `Email: ${user.email}`;
    document.getElementById(
      "userPhone"
    ).innerText = `Phone: ${user.mobileNumber}`;
    document.getElementById("profileImage").src = user.profileImage;
  }
  if (upcomingContainer) {
    upcomingContainer.innerHTML = ""; // Clear old content

    if (tripBookings.length === 0) {
      upcomingContainer.innerHTML = "<p>No upcoming trips booked yet.</p>";
    } else {
      tripBookings.forEach((trip) => {
        const card = document.createElement("div");

        card.className = "trip-card";
        card.innerHTML = `
        <img src="${trip.image}" alt="${trip.title}" id="imageBookedTrip"  >
        <h3>${trip.title}</h3>
        <p>Booked on: ${trip.date}</p>
      `;
        upcomingContainer.appendChild(card);
      });
    }
  }
});
