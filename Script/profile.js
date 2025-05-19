// function showTab(tabId) {
//   const contents = document.querySelectorAll(".tab-content");
//   const tabs = document.querySelectorAll(".tab");

//   contents.forEach((content) => content.classList.add("hidden"));
//   document.getElementById(tabId).classList.remove("hidden");

//   tabs.forEach((tab) => tab.classList.remove("active"));
//   event.target.classList.add("active");
// }

// function editProfile() {
//   const newName = prompt("Enter new name:");
//   if (newName) document.getElementById("name").textContent = newName;
// }

document.addEventListener("DOMContentLoaded", function () {
  const profileBox = document.getElementById("profile-container");
  const users = JSON.parse(localStorage.getItem("users"));
  let loggedInTable = JSON.parse(localStorage.getItem("loggedInTable"));
  const isLogggedIn = users.find((user) => user.id === loggedInTable.id);

  if (isLogggedIn) {
    profileBox.innerHTML = `
      <h2>Welcome, ${users.name}</h2>
      <p><strong>Email:</strong>${users.email}</p>
      <p><strong>Mobile Number:</strong> ${users.mobileNumber}</p>
    `;
    return;
  }

});
function logout() {
  let loggedInTable = JSON.parse(localStorage.getItem("loggedInTable")) || [];
  // Find the user who is currently logged in and set isLogin to false
  loggedInTable = loggedInTable.map(user => {
      if (user.isLogin) user.isLogin = false;
      return user;
  });
  alert("you have been logged out")
  localStorage.setItem("loggedInTable", JSON.stringify(loggedInTable));

  // Optionally, clear session id for logged-in user
  localStorage.removeItem("loggedInUserId");

  // Redirect to home or login page
  window.location.href = "../Files/login.html";
}
