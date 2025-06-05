document.addEventListener("DOMContentLoaded", function () {
  const errorMessage = document.getElementById("error-message");
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredEmail = document.getElementById("email").value.trim();
    const enteredPass = document.getElementById("password").value;

    if (!enteredEmail || !enteredPass) {
      showError("All fields are required.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);

    const existingUser = users.find((user) => user.email === enteredEmail);
    console.log(existingUser);

    if (existingUser == null) {
      showError("User is not registerd.");
      return;
    }

    if (!existingUser || existingUser.password !== enteredPass) {
      showError("Invalid Credenatials.");
      return;
    }

    let loggedInTable = JSON.parse(localStorage.getItem("loggedInTable")) || [];

    const loggedInUserIndex = loggedInTable.findIndex(
      (user) => user.email === enteredEmail
    );

    if (loggedInUserIndex !== -1 && loggedInTable[loggedInUserIndex].isLogin) {
      showError("User is already logged in.");
      return;
    }

    if (loggedInUserIndex !== -1) {
      // Update existing user's login status
      loggedInTable[loggedInUserIndex].isLogin = true;
    } else {
      // Add new login status
      loggedInTable.push({ email: enteredEmail, isLogin: true });
    }

    localStorage.setItem("loggedInTable", JSON.stringify(loggedInTable));

    alert("Login successful!");
    
    window.location.href = `../Files/profile.html?id=${existingUser.id}`;
  });

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }
});
