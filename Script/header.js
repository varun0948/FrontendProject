document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("login");
  const loggedInTable = JSON.parse(localStorage.getItem("loggedInTable"));

  function loginLink() {
    if (isLogin === "true") {
      window.location.href = "../Files/profile.html";
    }
  }
  loginLink();
  function profileLink() {
    if (isLogin === "false") {
      alert("you don't have any Account ");
      window.location.href = "../Files/login.html";
    }
  }
});
