// Validation helpers
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPhone(phone) {
  return /^\d{10}$/.test(phone);
}
function isValidCity(city) {
  return /^[A-Za-z\s]+$/.test(city);
}
function isValidPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

// Signup
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const city = document.getElementById("city").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (!isValidEmail(email)) return alert("Invalid email format");
      if (!isValidPhone(phone)) return alert("Phone must be 10 digits");
      if (!isValidCity(city)) return alert("City must contain only letters");
      if (!isValidPassword(password)) return alert("Password must be 8+ chars with letters & numbers");
      if (password !== confirmPassword) return alert("Passwords do not match");

      const user = { name, email, phone, city, password };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Signup successful! Please sign in.");
      window.location.href = "SignIn.html";
    });
  }

  // Signin
  if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("signinEmail").value.trim();
      const password = document.getElementById("signinPassword").value;

      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return alert("No registered user. Please sign up first.");

      if (email === user.email && password === user.password) {
        sessionStorage.setItem("loggedIn", JSON.stringify(user));
        alert("Login successful!");
        window.location.href = "travelapp.html";
      } else {
        alert("Invalid credentials");
      }
    });
  }
});
