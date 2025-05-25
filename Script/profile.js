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
  }
});
