// BOOKING.JS

let currentTrip = null;
let isSubmitting = false;

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tripKey = params.get("trip");

  fetch("../Data/trips.json")
    .then((res) => res.json())
    .then((trips) => {
      const trip = trips[tripKey];

      if (!trip) {
        document.getElementById("bookingContent").innerHTML = `
          <div class="error-container">
            <h2>🚫 Trip not found!</h2>
            <p>The requested trip could not be found.</p>
            <button onclick="window.location.href='home.html'">Go Back Home</button>
          </div>`;
        return;
      }

      currentTrip = trip;
      populateTripDetails(trip);
      initializeFormHandlers();
    })
    .catch((err) => {
      console.error("Error loading trips:", err);
      document.getElementById("bookingContent").innerHTML = `
        <div class="error-container">
          <h2>⚠️ Error loading trip data</h2>
          <p>Please try again later.</p>
          <button onclick="location.reload()">Retry</button>
        </div>`;
    });
});

// Populate trip details in HTML
function populateTripDetails(trip) {
  document.getElementById("loadingMessage").style.display = "none";
  document.getElementById("bookingContainer").style.display = "block";

  document.getElementById("tripTitle").textContent = trip.title;
  document.getElementById("tripSubtitle").textContent = trip.subtitle;
  document.getElementById("basePrice").textContent = trip.price;
  document.getElementById("totalPrice").textContent = trip.price;
  document.getElementById("tripDescription").textContent = trip.description;

  document.getElementById("travelDate").min = getTodayDate();
}

function initializeFormHandlers() {
  const form = document.getElementById("bookingForm");
  const forSomeoneCheckbox = document.getElementById("forSomeoneElse");
  const guestSection = document.getElementById("guestSection");
  const numPeopleSelect = document.getElementById("numPeople");
  const mobileInput = document.getElementById("number");
  const guestMobileInput = document.getElementById("guestMobile");

  forSomeoneCheckbox.addEventListener("change", () => {
    if (forSomeoneCheckbox.checked) {
      guestSection.style.display = "block";
      guestSection.scrollIntoView({ behavior: "smooth" });

      document.getElementById("guestName").required = true;
      document.getElementById("guestEmail").required = true;
      document.getElementById("guestMobile").required = true;
      document.getElementById("guestAge").required = true;
    } else {
      guestSection.style.display = "none";

      document.getElementById("guestName").required = false;
      document.getElementById("guestEmail").required = false;
      document.getElementById("guestMobile").required = false;
      document.getElementById("guestAge").required = false;

      ["guestName", "guestEmail", "guestMobile", "guestAge"].forEach(clearError);
    }
  });

  // Real-time mobile number formatting and validation
  [mobileInput, guestMobileInput].forEach((input) => {
    if (input) {
      input.addEventListener("input", (e) => {
        const formatted = formatMobileNumber(e.target.value);
        e.target.value = formatted;

        if (formatted.length === 10) {
          clearError(e.target.id);
        }
      });
    }
  });

  // Real-time total price calculation
  numPeopleSelect.addEventListener("change", () => {
    const numPeople = numPeopleSelect.value;
    if (numPeople && currentTrip) {
      const totalPrice = calculateTotalPrice(currentTrip.price, numPeople);
      document.getElementById(
        "totalPrice"
      ).textContent = `₹${totalPrice.toLocaleString()}`;
      clearError("numPeople");
    }
  });

  // Clear errors on input
  ["fullName", "email", "age", "guestName", "guestEmail", "guestAge"].forEach(
    (fieldId) => {
      const field = document.getElementById(fieldId);
      if (field) {
        field.addEventListener("input", () => {
          clearError(fieldId);
        });
      }
    }
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (validateForm()) {
      submitBooking();
    }
  });
}

// Utility Functions
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function validateName(name) {
  return name.length >= 2 && name.length <= 50 && /^[a-zA-Z\s]+$/.test(name);
}
function validateAge(age) {
  const ageNum = parseInt(age);
  return ageNum >= 1 && ageNum <= 120;
}
function formatMobileNumber(value) {
  return value.replace(/\D/g, "");
}
function validateMobile(mobile) {
  const cleanMobile = formatMobileNumber(mobile);
  return cleanMobile.length === 10 && /^[0-9]{10}$/.test(cleanMobile);
}
function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function calculateTotalPrice(basePrice, numPeople) {
  const price = parseInt(basePrice.replace(/[^0-9]/g, ""));
  return price * parseInt(numPeople);
}

// Error handling functions
function showError(elementId, message) {
  const element = document.getElementById(elementId);
  const existingError = element.parentNode.querySelector(".error-message");

  if (existingError) {
    existingError.remove();
  }

  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;
  element.parentNode.appendChild(errorDiv);

  element.classList.add("error");
  element.focus();

  element.scrollIntoView({ behavior: "smooth", block: "center" });

  setTimeout(() => {
    if (errorDiv.parentNode) {
      errorDiv.remove();
      element.classList.remove("error");
    }
  }, 5000);
}
function clearError(elementId) {
  const element = document.getElementById(elementId);
  const errorDiv = element.parentNode.querySelector(".error-message");
  if (errorDiv) {
    errorDiv.remove();
  }
  element.classList.remove("error");
}

// Form validation
function validateForm() {
  let isValid = true;
  const forSomeoneCheckbox = document.getElementById("forSomeoneElse");

  // Primary contact validation
  const fullName = document.getElementById("fullName").value.trim();
  if (!validateName(fullName)) {
    showError(
      "fullName",
      "Please enter a valid name (2-50 characters, letters only)"
    );
    isValid = false;
  }

  const email = document.getElementById("email").value.trim();
  if (!validateEmail(email)) {
    showError("email", "Please enter a valid email address");
    isValid = false;
  }

  const mobile = document.getElementById("number").value.trim();
  if (!validateMobile(mobile)) {
    showError("number", "Please enter a valid 10-digit mobile number");
    isValid = false;
  }

  const age = document.getElementById("age").value;
  if (!validateAge(age)) {
    showError("age", "Please enter a valid age (1-120)");
    isValid = false;
  }

  // Travel date validation
  const travelDate = document.getElementById("travelDate").value;
  const today = new Date().toISOString().split("T")[0];
  if (!travelDate || travelDate < today) {
    showError("travelDate", "Please select a future date");
    isValid = false;
  }

  const numPeople = document.getElementById("numPeople").value;
  if (!numPeople) {
    showError("numPeople", "Please select number of people");
    isValid = false;
  }

  // Guest validation (if applicable)
  if (forSomeoneCheckbox.checked) {
    const guestName = document.getElementById("guestName").value.trim();
    if (!validateName(guestName)) {
      showError(
        "guestName",
        "Please enter a valid guest name (2-50 characters, letters only)"
      );
      isValid = false;
    }

    const guestEmail = document.getElementById("guestEmail").value.trim();
    if (!validateEmail(guestEmail)) {
      showError("guestEmail", "Please enter a valid guest email address");
      isValid = false;
    }

    const guestMobile = document.getElementById("guestMobile").value.trim();
    if (!validateMobile(guestMobile)) {
      showError(
        "guestMobile",
        "Please enter a valid 10-digit guest mobile number"
      );
      isValid = false;
    }

    const guestAge = document.getElementById("guestAge").value;
    if (!validateAge(guestAge)) {
      showError("guestAge", "Please enter a valid guest age (1-120)");
      isValid = false;
    }
  }

  return isValid;
}

// Submit booking
function submitBooking() {
  isSubmitting = true;
  const forSomeoneCheckbox = document.getElementById("forSomeoneElse");

  // Show loading state
  const submitBtn = document.getElementById("submitBtn");
  const btnText = submitBtn.querySelector(".btn-text");
  const btnLoading = submitBtn.querySelector(".btn-loading");

  btnText.style.display = "none";
  btnLoading.style.display = "flex";
  submitBtn.disabled = true;

  setTimeout(() => {
    try {
      const formData = {
        // Primary contact
        primaryContact: {
          fullName: document.getElementById("fullName").value.trim(),
          email: document.getElementById("email").value.trim(),
          mobile: formatMobileNumber(document.getElementById("number").value),
          age: parseInt(document.getElementById("age").value),
          isPrimary: true,
        },

        tripDetails: {
          title: currentTrip.title,
          subtitle: currentTrip.subtitle,
          description: currentTrip.description,
          basePrice: currentTrip.price,
          image: currentTrip.image || "",
          travelDate: document.getElementById("travelDate").value,
          numPeople: parseInt(document.getElementById("numPeople").value),
          totalPrice: calculateTotalPrice(
            currentTrip.price,
            document.getElementById("numPeople").value
          ),
          specialRequests:
            document.getElementById("specialRequests").value.trim() || "None",
        },

        guestInfo: forSomeoneCheckbox.checked
          ? {
              fullName: document.getElementById("guestName").value.trim(),
              email: document.getElementById("guestEmail").value.trim(),
              mobile: formatMobileNumber(
                document.getElementById("guestMobile").value
              ),
              age: parseInt(document.getElementById("guestAge").value),
              isPrimary: false,
            }
          : null,

        bookingMeta: {
          bookingId: generateBookingId(),
          bookingDate: new Date().toISOString(),
          isGuestBooking: forSomeoneCheckbox.checked,
          status: "confirmed",
        },
      };

      saveBookingData(formData);

      showSuccessModal(formData);
    } catch (error) {
      console.error("Booking submission error:", error);
      alert(
        "An error occurred while processing your booking. Please try again."
      );
    } finally {
      isSubmitting = false;
      btnText.style.display = "inline";
      btnLoading.style.display = "none";
      submitBtn.disabled = false;
    }
  }, 2000);
}

function generateBookingId() {
  return (
    "BK" + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase()
  );
}

function saveBookingData(formData) {
  const bookingTable = JSON.parse(localStorage.getItem("bookingTable")) || [];
  bookingTable.push(formData);
  localStorage.setItem("bookingTable", JSON.stringify(bookingTable));

  // Save to user's upcoming trips
  const userId = sessionStorage.getItem("loggedInUserId");
  if (userId) {
    const upcomingTrips = JSON.parse(localStorage.getItem("bookings")) || {};
    if (!upcomingTrips[userId]) upcomingTrips[userId] = [];

    // Defensive: only push valid trip
    upcomingTrips[userId].push({
      bookingId: formData.bookingMeta.bookingId,
      title: formData.tripDetails.title,
      image: formData.tripDetails.image || "../Images/default.jpg",
      date: formData.tripDetails.travelDate,
      totalPrice: formData.tripDetails.totalPrice,
      numPeople: formData.tripDetails.numPeople,
      status: "confirmed",
    });

    localStorage.setItem("bookings", JSON.stringify(upcomingTrips));
  }
}

function showSuccessModal(formData) {
  const modal = document.getElementById("confirmationModal");
  const modalDetails = document.getElementById("modalDetails");

  modalDetails.innerHTML = `
    <div class="booking-success">
      <div class="success-header">
        <h3>🎊 Booking Confirmation</h3>
        <p class="booking-id">Booking ID: <strong>${
          formData.bookingMeta.bookingId
        }</strong></p>
      </div>

      <div class="success-details">
        <div class="detail-row">
          <span class="label">👤 Primary Contact:</span>
          <span class="value">${formData.primaryContact.fullName}</span>
        </div>

        <div class="detail-row">
          <span class="label">📅 Travel Date:</span>
          <span class="value">${new Date(
            formData.tripDetails.travelDate
          ).toLocaleDateString()}</span>
        </div>

        <div class="detail-row">
          <span class="label">👥 Number of People:</span>
          <span class="value">${formData.tripDetails.numPeople}</span>
        </div>

        <div class="detail-row">
          <span class="label">💰 Total Amount:</span>
          <span class="value">₹${formData.tripDetails.totalPrice.toLocaleString()}</span>
        </div>

        ${
          formData.guestInfo
            ? `
        <div class="detail-row">
          <span class="label">🎁 Guest:</span>
          <span class="value">${formData.guestInfo.fullName} (${formData.guestInfo.email})</span>
        </div>
        `
            : ""
        }

        <div class="detail-row">
          <span class="label">📝 Special Requests:</span>
          <span class="value">${formData.tripDetails.specialRequests}</span>
        </div>
      </div>

      <div class="success-footer">
        <p>🎉 Your booking has been confirmed! We'll contact you soon with further details.</p>
      </div>
    </div>
  `;

  modal.style.display = "block";

  const goHomeBtn = document.getElementById("goHomeBtn");
  const closeModal = document.getElementById("closeModal");

  goHomeBtn.onclick = () => (window.location.href = "home.html");
  closeModal.onclick = () => (modal.style.display = "none");

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  setTimeout(() => {
    window.location.href = "home.html";
  }, 10000);
}