function showTab(tabId) {
  const contents = document.querySelectorAll(".tab-content");
  const tabs = document.querySelectorAll(".tab");

  contents.forEach((content) => content.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");

  tabs.forEach((tab) => tab.classList.remove("active"));
  event.target.classList.add("active");
}

// function editProfile() {
//   const newName = prompt("Enter new name:");
//   const newEmail = prompt("Enter new email:");
//   if (newName) document.getElementById("name").textContent = newName;
//   if (newEmail) document.getElementById("email").textContent = newEmail;
// }
document.addEventListener("DOMContentLoaded", function () {
  const profileBox = document.getElementById("profile-container");

  const loggedInUserId = localStorage.getItem("loggedInuserId");

  if (!loggedInUserId) {
    // alert("No Logged-In User found. Redireccting to the Login page. ");
    // window.location.href = "../Files/login.html";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users"));

  const loggedInUser = users.find(
    (user) => user.id === parseInt(loggedInUserId)
  );
  if (!loggedInUser) {
    // alert("User details not found.Redirecing to the Login page.");
    // window.location.href = "../Files/login.html";
    return;
  }
  profileBox.innerHTML = `
      <h2>Welcome, ${loggedInUser.name}</h2>
      <p><strong>Email:</strong>${loggedInUser.email}</p>
      <p><strong>Mobile Number:</strong> ${loggedInUser.mobileNumber}</p>
    `;
});
