document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup-form");
  const verifyOtpForm = document.getElementById("verify-otp-form");
  const errorMessage = document.getElementById("error-message");
  const otpErrorMessage = document.getElementById("otp-error-message");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let otpStorage = JSON.parse(localStorage.getItem("otpStorage")) || [];

  let newUser = null;

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = signupForm.querySelectorAll(".input-box");
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const mobileNumber = inputs[2].value.trim();
    const password = inputs[3].value.trim();

    if (!name || !email || !mobileNumber || !password) {
      showError(errorMessage, "All fields are required.");
      return;
    }

    const existingUser = users.find((user) => user.email === email);
    const existigMobileNo = users.find(user => user.mobileNumber === mobileNumber)

    if (existingUser || existigMobileNo) {
      showError(errorMessage, "User already registered.");
      return;
    }

    const generatedOtp = Math.floor(1000 + Math.random() * 9000);
    alert(`Your OTP is ${generatedOtp}`);

    otpStorage.push({ mobileNumber, generatedOtp });
    localStorage.setItem("otpStorage", JSON.stringify(otpStorage));

    newUser = { name, email, mobileNumber, password }; 

    signupForm.classList.add("hidden");
    verifyOtpForm.classList.remove("hidden");
    errorMessage.style.display = "none";
  });

  verifyOtpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredOtp = document.getElementById("otp-input").value.trim();
    const otpEntry = otpStorage.find((otp) => otp.mobileNumber === newUser.mobileNumber);

    if (!otpEntry || parseInt(enteredOtp) !== otpEntry.generatedOtp) {
      showError(otpErrorMessage, "Invalid OTP. Please try again.");
      return;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    otpStorage = otpStorage.filter((otp) => otp.mobileNumber !== newUser.mobileNumber);
    localStorage.setItem("otpStorage", JSON.stringify(otpStorage));
 

    
    alert("Registration successful!");

    verifyOtpForm.reset();
    verifyOtpForm.classList.add("hidden");
    otpErrorMessage.style.display = "none";
    signupForm.classList.remove("hidden");
    signupForm.reset();

    newUser = null;
  });

  function showError(element, message) {
    element.textContent = message;
    element.style.display = "block";
  }
});
