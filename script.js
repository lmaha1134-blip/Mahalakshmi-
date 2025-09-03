// ===== Dynamic Year in Footer =====
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// ===== Smooth Scroll for Navigation Links =====
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ===== Simple Form Validation =====
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    if (name === "" || email === "" || message === "") {
      e.preventDefault();
      alert("❌ Please fill in all fields before submitting.");
    } else {
      alert("✅ Thank you! Your message has been recorded (demo only).");
    }
  });
}