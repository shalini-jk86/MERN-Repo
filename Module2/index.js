// Signup + Signin Validation
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const location = document.getElementById("location").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;
      const cityRegex = /^[A-Za-z\s]+$/;

      if (!emailRegex.test(email)) return alert("Invalid email format!");
      if (!phoneRegex.test(phone)) return alert("Phone must be 10 digits!");
      if (!cityRegex.test(location)) return alert("City must contain only alphabets!");
      if (password.length < 8 || !/\d/.test(password) || !/[A-Za-z]/.test(password)) {
        return alert("Password must be at least 8 characters with letters and numbers!");
      }
      if (password !== confirmPassword) return alert("Passwords do not match!");

      // Save user data in localStorage
      const user = { fullname, email, phone, location, password };
      localStorage.setItem("user", JSON.stringify(user));

      alert("Signup successful! Please Sign In.");
      window.location.href = "SignIn.html";
    });
  }

  if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("signinEmail").value.trim();
      const password = document.getElementById("signinPassword").value;

      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) return alert("No registered user found. Please Sign Up first.");
      if (email.toLowerCase() !== user.email.toLowerCase() || password !== user.password) {
        return alert("Invalid email or password!");
      }

      // Save session
      sessionStorage.setItem("loggedIn", JSON.stringify(user));
      alert("Login successful!");
      window.location.href = "travelapp.html";
    });
  }
});
