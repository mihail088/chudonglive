/* ChudongLive — small UI helpers + bilingual (zh/en) toggle, no dependencies */
(function () {
  "use strict";

  // ----- Language (i18n) -----
  function getLang() {
    var l;
    try { l = localStorage.getItem("lang"); } catch (e) {}
    if (!l) {
      var nav = (navigator.language || navigator.userLanguage || "").toLowerCase();
      l = nav.indexOf("zh") === 0 ? "zh" : "en";
    }
    return l === "zh" ? "zh" : "en";
  }
  function applyLang(l) {
    document.documentElement.setAttribute("data-lang", l);
    document.documentElement.setAttribute("lang", l === "zh" ? "zh-CN" : "en");
    try { localStorage.setItem("lang", l); } catch (e) {}
  }
  // Set as early as possible (an inline <head> script also does this to avoid flash)
  applyLang(getLang());

  document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-lang") === "zh" ? "en" : "zh";
      applyLang(next);
    });
  });

  // ----- Mobile nav toggle -----
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () { nav.classList.toggle("open"); });
  }

  // ----- Current year -----
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // ----- Active nav link -----
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    if (a.getAttribute("href") === here) {
      a.style.color = "var(--text)";
      a.style.background = "rgba(255,255,255,.06)";
    }
  });

  // ----- Contact form (client-side demo) -----
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("form-msg");
      if (msg) {
        msg.style.display = "block";
        var zh = document.documentElement.getAttribute("data-lang") === "zh";
        msg.textContent = zh
          ? "已收到!我们的支持团队会在 1 个工作日内回复你。"
          : "Thanks! Your message has been received. Our support team replies within 1 business day.";
      }
      form.reset();
    });
  }
})();
