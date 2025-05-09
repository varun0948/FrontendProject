document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("users")) || [];

    if (user.length > 0) {
        document.getElementById("username").textContent = user[0].name;
        document.getElementById("useremail").textContent = user[0].email;
    }

    // Logout Function
    document.getElementById("logout").addEventListener("click", function () {
        localStorage.removeItem("users"); // Clear user data
        alert("Logged out successfully!");
        window.location.href = "../Files/login.html"; // Redirect to login page
    });
});
