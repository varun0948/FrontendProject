document.addEventListener("DOMContentLoaded", function () {
  const errorMessage = document.getElementById("error-message");
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredEmail = document.getElementById("email").value;
    const enteredPass = document.getElementById("password").value;

    if (!enteredEmail || !enteredPass) {
      showError("All fields are required.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users"));
    const existingUser = users.find((user) => user.email === enteredEmail);
    console.log(existingUser);

    const existingPass = existingUser.password === enteredPass;

    if (existingUser && existingPass) {
      showError("Invalid Email and Password!!!");
      window.location.href = "../Files/login.html";
    }

    let loggedInTable = JSON.parse(localStorage.getItem("loggedInTable"));
    const loggedInUser = loggedInTable.find(
      (user) => user.email === enteredEmail
    );

    if (loggedInUser && loggedInUser.isLogin) {
      alert("User is already logged in.");
      showError("User is already logged in.");
      return;
    }

    if (loggedInUser) {
      loggedInUser.isLogin = true;
    } else {
      loggedInTable.push({ email: enteredEmail, isLogin: true });
    }
    localStorage.setItem("loggedInTable", JSON.stringify(loggedInTable));

    alert("Login successful!");
    window.location.href = "../Files/profile.html";
  });

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }
});
