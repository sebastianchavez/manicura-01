/* =====================================================
   contact.js - Validación y envío (mock) del formulario
   ===================================================== */

(function () {
  "use strict";

  const form = document.getElementById("contact-form");
  const success = document.getElementById("contact-success");
  if (!form) return;

  // Rellenar select de servicios
  const serviceSelect = form.querySelector("#servicio");
  if (serviceSelect && typeof MOCK !== "undefined") {
    const services = [...new Set(MOCK.services.map((s) => s.name))];
    services.forEach((name) => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      serviceSelect.appendChild(opt);
    });
  }

  // Rellenar fecha mínima = hoy
  const dateInput = form.querySelector("#fecha");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }

  // Helpers
  const showError = (field, msg) => {
    const errorEl = form.querySelector(`[data-error="${field.id}"]`);
    if (errorEl) errorEl.textContent = msg;
    field.classList.add("input-error");
    field.setAttribute("aria-invalid", "true");
  };

  const clearError = (field) => {
    const errorEl = form.querySelector(`[data-error="${field.id}"]`);
    if (errorEl) errorEl.textContent = "";
    field.classList.remove("input-error");
    field.removeAttribute("aria-invalid");
  };

  // Limpiar errores al escribir
  form.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("input", () => clearError(field));
    field.addEventListener("change", () => clearError(field));
  });

  // Validadores
  const validators = {
    nombre: (v) => v.trim().length < 2 && "Introduce tu nombre completo",
    email: (v) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && "Email no válido",
    telefono: (v) => v && !/^\+?[\d\s-]{9,}$/.test(v) && "Teléfono no válido",
    servicio: (v) => !v && "Selecciona un servicio",
    mensaje: (v) => v.trim().length < 10 && "Cuéntanos un poco más (mín. 10 caracteres)",
    privacidad: (field) => !field.checked && "Debes aceptar la política de privacidad",
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    Object.entries(validators).forEach(([name, validate]) => {
      const field = form.elements[name];
      if (!field) return;
      const err = validate(field.value, field);
      if (err) {
        showError(field, err);
        valid = false;
      } else {
        clearError(field);
      }
    });

    if (!valid) {
      form.classList.add("shake");
      setTimeout(() => form.classList.remove("shake"), 600);
      return;
    }

    // Simular envío
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Enviando...';

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      form.reset();
      if (success) {
        success.classList.remove("hidden");
        success.classList.add("flex");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          success.classList.add("hidden");
          success.classList.remove("flex");
        }, 6000);
      }
    }, 1200);
  });
})();
