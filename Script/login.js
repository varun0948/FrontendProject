document.addEventListener("DOMContentLoaded", function () {
  

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value();
    const password = document.getElementById("password").value();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (!email || !password) {
      showError("All fields are required.");
      return;
    }
    let existingUserEmail = users.find((users) => users.email === email);

    // let existingUserPass = users.find((users) => users.password === password);

    if (existingUserEmail) {
      showError("User already registerd with this email.");
      return;
    }

    // const newUser = { email, password };
    // users.push(newUser);
    // localStorage.setItem("users", JSON.stringify(users));

    // form.reset();
    errorMessage.style.display = "none";
    alert("Registration successful!");

    signupForm.classList.add("hidden");
    verifyOtpForm.classList.remove("hidden");

    function showError(message) {
      errorMessage.textContent = message;
      errorMessage.style.display = "block";
    }
  });

 
});
