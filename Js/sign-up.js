let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");

let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let confirmError = document.getElementById("confirmError");

// ================= EMAIL VALIDATION =================

email.addEventListener("input", () => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value === "") {
    emailError.textContent = "";
    email.classList.remove("is-invalid", "is-valid");
    return;
  }

  if (!pattern.test(email.value)) {
    emailError.textContent = "Please include an '@' and a valid domain.";
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  } else {
    emailError.textContent = "";
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  }
});

// ================= PASSWORD VALIDATION =================
password.addEventListener("input", () => {
  let errors = [];

  if (password.value === "") {
    passwordError.textContent = "";
    password.classList.remove("is-invalid", "is-valid");
    return;
  }

  if (password.value.length < 8) {
    errors.push("• Use at least 8 characters");
  }
  if (!/[A-Z]/.test(password.value)) {
    errors.push("• Use at least one uppercase letter");
  }
  if (!/[0-9]/.test(password.value)) {
    errors.push("• Use at least one number");
  }

  if (errors.length > 0) {
    passwordError.innerHTML = errors.join("<br>");
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
  } else {
    passwordError.textContent = "";
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
  }
});

// ================= CONFIRM PASSWORD =================
confirmPassword.addEventListener("input", () => {

  if (confirmPassword.value === "") {
    confirmError.textContent = "";
    confirmPassword.classList.remove("is-invalid", "is-valid");
    return;
  }

  if (confirmPassword.value !== password.value) {
    confirmError.textContent = "Passwords do not match";
    confirmPassword.classList.add("is-invalid");
    confirmPassword.classList.remove("is-valid");
  } else {
    confirmError.textContent = "";
    confirmPassword.classList.remove("is-invalid");
    confirmPassword.classList.add("is-valid");
  }
});
