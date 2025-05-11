document.addEventListener("DOMContentLoaded", function () {
  const errorMessage = document.getElementById("error-message");
  
  loginform.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let errorMessage = JSON.parse(localStorage.getItem("LoggedIn")) || [];
    const enteredEmail = document.getElementById("email").value;
    const enteredPass = document.getElementById("password").value;
    let loggedInTable = JSON.parse(localStorage.getItem("users")) || [];
    
    if (!email || !password) {
      showError(errorMessage, "All fields are required.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users"));

    const existingUser = users.find((user) => user.email === enteredEmail);
    const existingPass = existingUser.password === enteredPass;

    if (existingUser && existingPass) {
      showError("User is already logged in.");
      let loggedInBefore = loggedInUsers.some(
        (user) => user.email === enteredEmail
      );
      if (loggedInBefore) {
        alert("Your LoggedIn Successfully");
        window.location.href = "../Files/home.html";
        return;
      }
    } else {
      showError("Login credetial is not valid .");
      return;
    }
  });
  loggedInUsers.push(existingUser);
  localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsers));
  localStorage.setItem("LoggedIn", JSON.stringify(existingUser));

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }
});
