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

// document.addEventListener("DOMContentLoaded", function () {
//   const isLoggedIn = localStorage.getItem("loggedInTable");

//   const loginLink = document.getElementById("loginLink");
//   const profileLink = document.getElementById("profileLink");

//   if (isLoggedIn === "true") {
//     loginLink.style.display = "none";
//     profileLink.style.display = "block";
//   } else {
//     loginLink.style.display = "block";
//     profileLink.style.display = "none";
//   }
// });

function logout() {
  let loggedInTable = JSON.parse(localStorage.getItem("loggedInTable")) || [];

  loggedInTable = loggedInTable.map((user) => {
    if (user.isLogin) user.isLogin = false;
    return user;
  });
  alert("you have been logged out");
  localStorage.setItem("loggedInTable", JSON.stringify(loggedInTable));

  localStorage.removeItem("loggedInUserId");

  window.location.href = "../Files/home.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("id");

  console.log(userId);

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((user) => String(user.id) == userId);
  console.log(user);
  if (user) {
    document.getElementById("userName").innerText = `Name: ${user.name}`;
    document.getElementById("userEmail").innerText = `Email: ${user.email}`;
    document.getElementById("userPhone").innerText = `Phone: ${user.mobileNumber}`;
  }
});
