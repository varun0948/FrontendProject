document.addEventListener("DOMContentLoaded", function () {
  const errorMessage = document.getElementById("error-message");

  loginform.addEventListener("submit", function (e) {
    e.preventDefault();

    let errorMessage = JSON.parse(localStorage.getItem("LoggedIn")) || [];
    const enteredEmail = document.getElementById("email").value;
    const enteredPass = document.getElementById("password").value;

    if (!email || !password) {
      showError(errorMessage, "All fields are required.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users"));

    const existingUser = users.find((user) => user.email === enteredEmail);
    const existingPass = existingUser.password === enteredPass;

    // console.log(existingUser);

    if (existingUser && existingPass) {
      alert("Your LoggedIn Successfully");

      window.location.href = "../Files/home.html";
    } else {
      showError("Login credetial is not valid .");
      return;
    }
  });

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }
});
