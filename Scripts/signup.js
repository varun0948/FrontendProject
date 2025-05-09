document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let number = document.getElementById("number").value;
        let otp = document.getElementById("otp").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let existingUser = users.find(user => user.email === email);

        if (existingUser) {
            errorMessage.style.display = "block";
            return;
        }

        let newUser = { name, email, password, number, otp };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful!");
        window.location.href = "profile.html";
    });
});