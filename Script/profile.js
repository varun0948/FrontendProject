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
  sessionStorage.removeItem("loggedInUserId");

  const loggedInTable = JSON.parse(localStorage.getItem("loggedInTable")) || [];
  const userId = localStorage.getItem("loggedInUserId");
  const updatedTable = loggedInTable.map((user) => {
    if (user.id == userId) return { ...user, isLogin: false };
    return user;
  });
  localStorage.setItem("loggedInTable", JSON.stringify(updatedTable));

  alert("Logged out successfully");
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("id");

  console.log(userId);

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((user) => String(user.id) == userId);

  if (user) {
    document.getElementById("userName").innerText = `Name: ${user.name}`;
    document.getElementById("userEmail").innerText = `Email: ${user.email}`;
    document.getElementById(
      "userPhone"
    ).innerText = `Phone: ${user.mobileNumber}`;
    document.getElementById("profileImage").src = user.profileImage;

    const tripsContainer = document.querySelector(".tripCards");
    const bookedTrips = user.bookedTrips || [];

    if (bookedTrips.length === 0) {
      tripsContainer.innerHTML = "<p>No upcoming trips yet.</p>";
    } else {
      tripsContainer.innerHTML = "";
      bookedTrips.forEach((trip, index) => {
        const tripCard = document.createElement("div");
        tripCard.classList.add(".tripCards");

        tripCard.innerHTML = `
          <div>
            <h4 style="color: #007bff;">${trip.title}</h4>
            <p>${trip.description}</p>
            <p><strong>Date:</strong> ${trip.date || "Not set"}</p>
          </div>
          <button class="book">Book Now</button>
          <span class="remove-btn" data-index="${index}">❌</span>
        `;

        tripsContainer.appendChild(tripCard);
      });
    }
  }
});
