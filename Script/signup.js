let counter = 0;
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup-form");
  const verifyOtpForm = document.getElementById("verify-otp-form");
  const errorMessage = document.getElementById("error-message");
  const otpErrorMessage = document.getElementById("otp-error-message");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let otpStorage = JSON.parse(localStorage.getItem("otpStorage")) || [];
  let loggedInTable = JSON.parse(localStorage.getItem("loggedInTable")) || [];

  let newUser = null;

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = signupForm.querySelectorAll(".input-box");
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const mobileNumber = inputs[2].value.trim();
    const password = inputs[3].value.trim();
    const fileInput = document.getElementById("userImage");
    const file = fileInput.files[0];

    if (!name || !email || !mobileNumber || !password || !file) {
      showError(errorMessage, "All fields are required.");
      return;
    }

    const existingUser = users.find((user) => user.email === email);
    const existigMobileNo = users.find(
      (user) => user.mobileNumber === mobileNumber
    );

    if (existingUser || existigMobileNo) {
      showError(errorMessage, "User already registered.");
      return;
    }

    const reader = new FileReader();

    reader.onload = function () {
      const base64Image = reader.result;

      newUser = {
        id: generateId(),
        name,
        email,
        mobileNumber,
        password,
        profileImage: base64Image,
      };

      const generatedOtp = Math.floor(1000 + Math.random() * 9000);
      alert(`Your OTP is ${generatedOtp}`);

      otpStorage.push({ mobileNumber, generatedOtp });
      localStorage.setItem("otpStorage", JSON.stringify(otpStorage));

      signupForm.classList.add("hidden");
      verifyOtpForm.classList.remove("hidden");
      errorMessage.style.display = "none";
    };

    reader.readAsDataURL(file);
  });

  verifyOtpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredOtp = document.getElementById("otp-input").value.trim();
    const otpEntry = otpStorage.find(
      (otp) => otp.mobileNumber === newUser.mobileNumber
    );

    if (!otpEntry || parseInt(enteredOtp) !== otpEntry.generatedOtp) {
      showError(otpErrorMessage, "Invalid OTP. Please try again.");
      return;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    loggedInTable.push({
      id: newUser.id,
      email: newUser.email,
      isLogin: true,
    });
    localStorage.setItem("loggedInTable", JSON.stringify(loggedInTable));

    // Store logged in user id
    sessionStorage.setItem("loggedInUserId", newUser.id);

    // Read logged in user id

    otpStorage = otpStorage.filter(
      (otp) => otp.mobileNumber !== newUser.mobileNumber
    );
    localStorage.setItem("otpStorage", JSON.stringify(otpStorage));

    alert("Registration successful!");

    verifyOtpForm.reset();
    verifyOtpForm.classList.add("hidden");
    otpErrorMessage.style.display = "none";
    signupForm.classList.remove("hidden");
    signupForm.reset();

    window.location.href = `../Files/profile.html?id=${newUser.id}`;
    newUser = null;
  });

  function showError(element, message) {
    element.textContent = message;
    element.style.display = "block";
  }

  function generateId() {
    let counter = parseInt(localStorage.getItem("userCounter")) || 0;
    counter++;
    localStorage.setItem("userCounter", counter);
    return counter;
  }
});
