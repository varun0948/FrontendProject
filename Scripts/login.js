document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(validUser);
    if (validUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(validUser)); // Store logged-in user
      alert("Login successful!");
      window.location.href = "../Files/profile.html"; // Redirect to user profile
    } else {
      errorMessage.style.display = "block"; // Show error message
    }
  });
});
