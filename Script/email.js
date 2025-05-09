const form = document.getElementById("validateOtp");
document.addEventListener("submit", function (e) {
 
    e.preventDefault();
    const OTP = document.getElementById("Otp").value;

    if ((OTP = 123456)) {
      alert("signup sucecssll");
      window.location.href = "../Files/home.html";
    }
   
});
