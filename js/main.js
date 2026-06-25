/* LumiLive — small UI helpers (no external dependencies) */
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Current year in footers
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Highlight active nav link
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here || (here === "index.html" && href === "index.html")) {
      a.style.color = "var(--text)";
      a.style.background = "rgba(255,255,255,.06)";
    }
  });

  // Contact form (client-side demo — no data leaves the browser)
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("form-msg");
      if (msg) {
        msg.style.display = "block";
        msg.textContent =
          "Thanks! Your message has been received. Our support team replies within 1 business day.";
      }
      form.reset();
    });
  }
})();
