/* =====================================================
   main.js - Comportamiento global del sitio
   - Navbar shrink on scroll
   - Menú móvil
   - Año dinámico en footer
   - IntersectionObserver para animaciones
   - Contadores animados
   - Smooth scroll para anclas internas
   ===================================================== */

(function () {
  "use strict";

  // -------- Navbar shrink --------
  const navbar = document.getElementById("navbar");
  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 30) navbar.classList.add("navbar-scrolled");
    else navbar.classList.remove("navbar-scrolled");
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // -------- Menú móvil --------
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobile-menu");
  if (burger && mobileMenu) {
    const backdrop = document.getElementById("mobile-menu-backdrop");
    const setMenuOpen = (isOpen) => {
      mobileMenu.classList.toggle("open", isOpen);
      mobileMenu.setAttribute("aria-hidden", String(!isOpen));
      mobileMenu.inert = !isOpen;
      burger.classList.toggle("open", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
      burger.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
      backdrop?.classList.toggle("show", isOpen);
      navbar?.classList.toggle("menu-open", isOpen);
      document.body.classList.toggle("overflow-hidden", isOpen);
    };
    setMenuOpen(false);
    burger.setAttribute("aria-controls", "mobile-menu");
    burger.addEventListener("click", () => {
      setMenuOpen(!mobileMenu.classList.contains("open"));
    });
    backdrop?.addEventListener("click", () => setMenuOpen(false));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mobileMenu.classList.contains("open")) {
        setMenuOpen(false);
        burger.focus();
      }
    });
    window.matchMedia("(min-width: 1024px)").addEventListener("change", (event) => {
      if (event.matches) setMenuOpen(false);
    });
    // Cerrar al pulsar un enlace
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        setMenuOpen(false);
      })
    );
  }

  // -------- Año dinámico --------
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // -------- Animaciones al hacer scroll --------
  const animatedEls = document.querySelectorAll("[data-anim]");
  if ("IntersectionObserver" in window && animatedEls.length) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("anim-in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    animatedEls.forEach((el) => obs.observe(el));
  } else {
    animatedEls.forEach((el) => el.classList.add("anim-in"));
  }

  // -------- Contadores animados --------
  const counters = document.querySelectorAll("[data-counter]");
  if ("IntersectionObserver" in window && counters.length) {
    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.counter, 10);
          const suffix = el.dataset.suffix || "";
          const duration = 1500;
          const start = performance.now();
          const animate = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.floor(target * eased).toLocaleString("es-CL") + suffix;
            if (t < 1) requestAnimationFrame(animate);
            else el.textContent = target.toLocaleString("es-CL") + suffix;
          };
          requestAnimationFrame(animate);
          counterObs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => counterObs.observe(c));
  }

  // -------- Smooth scroll para anclas --------
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    });
  });

  // -------- Resaltar nav activo --------
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
      link.classList.add("active");
    }
  });

  // -------- FAQ acordeón (delegado) --------
  document.querySelectorAll("[data-faq]").forEach((item) => {
    const btn = item.querySelector("[data-faq-btn]");
    const ans = item.querySelector("[data-faq-answer]");
    if (!btn || !ans) return;
    btn.addEventListener("click", () => {
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      ans.style.maxHeight = open ? ans.scrollHeight + "px" : "0px";
    });
  });
})();
