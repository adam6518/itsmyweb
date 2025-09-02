// ===== Active nav link on scroll (basic) =====
const sections = document.querySelectorAll("header, section");
const navLinks = document.querySelectorAll(".nav-link");
const opts = { rootMargin: "-60% 0px -35% 0px", threshold: 0 };
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      const id = e.target.getAttribute("id");
      navLinks.forEach((l) =>
        l.classList.toggle("active", l.getAttribute("href") === `#${id}`)
      );
    }
  });
}, opts);
sections.forEach((s) => obs.observe(s));

// ===== Contact form (demo only) =====
const form = document.getElementById("contactForm");
const alertBox = document.getElementById("formAlert");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) {
    alertBox.className = "col-12 small text-danger";
    alertBox.textContent = "Please complete all fields.";
    return;
  }
  // In production: send via your backend or Formspree/EmailJS.
  alertBox.className = "col-12 small text-success";
  alertBox.textContent =
    "Thanks! Your message was validated on the client side.";
  form.reset();
});

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
