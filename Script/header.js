document.addEventListener("DOMContentLoaded", () => {
  const loginLinkEl = document.getElementById("login");
  const profileLinkEl = document.getElementById("profile");

  const loggedInUserId = sessionStorage.getItem("loggedInUserId");
  console.log("Logged in user id:", loggedInUserId);

  if (loggedInUserId) {
    loginLinkEl.style.display = "none";
    profileLinkEl.style.display = "inline-block";
    profileLinkEl.href = `../Files/profile.html?id=${loggedInUserId}`;
  } else {
    loginLinkEl.style.display = "inline-block";
    profileLinkEl.style.display = "none";
    loginLinkEl.href = "../Files/login.html";
  }
});
