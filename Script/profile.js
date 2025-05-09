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
  const newEmail = prompt("Enter new email:");

  if (newName) document.getElementById("name").textContent = newName;
  if (newEmail) document.getElementById("email").textContent = newEmail;
}
 
function logout() {
  localStorage.clear();
  sessionStorage.clear();

  window.location.href = "../Files/home.html"; 
}
 
  