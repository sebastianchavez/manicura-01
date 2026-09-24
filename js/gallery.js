/* =====================================================
   gallery.js - Lightbox + filtros por categoría
   ===================================================== */

(function () {
  "use strict";

  // -------- Renderizar grid desde MOCK --------
  const grid = document.getElementById("gallery-grid");
  const filters = document.getElementById("gallery-filters");
  if (!grid || typeof MOCK === "undefined") return;

  const renderGrid = (filter = "Todos") => {
    const items = filter === "Todos" ? MOCK.gallery : MOCK.gallery.filter((g) => g.category === filter);
    grid.innerHTML = items
      .map(
        (item, i) => `
        <button
          class="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 aspect-square"
          data-index="${MOCK.gallery.indexOf(item)}"
          data-gallery-trigger
          aria-label="Ver ${item.alt}"
        >
          <img
            src="${item.url}"
            alt="${item.alt}"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span class="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span class="text-white text-left">
              <span class="block font-semibold text-sm">${item.alt}</span>
              <span class="block text-xs opacity-90">${item.category}</span>
            </span>
          </span>
        </button>
      `
      )
      .join("");
  };

  renderGrid();

  // -------- Filtros --------
  if (filters) {
    filters.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-filter]");
      if (!btn) return;
      filters.querySelectorAll("[data-filter]").forEach((b) => {
        b.classList.remove("bg-rose-500", "text-white", "shadow");
        b.classList.add("bg-white", "text-rose-600");
      });
      btn.classList.remove("bg-white", "text-rose-600");
      btn.classList.add("bg-rose-500", "text-white", "shadow");
      renderGrid(btn.dataset.filter);
    });
  }

  // -------- Lightbox --------
  let currentIndex = 0;
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightbox-img");
  const lbCaption = document.getElementById("lightbox-caption");
  const lbClose = document.getElementById("lightbox-close");
  const lbPrev = document.getElementById("lightbox-prev");
  const lbNext = document.getElementById("lightbox-next");

  const openLightbox = (idx) => {
    if (!lb) return;
    currentIndex = idx;
    updateLightbox();
    lb.classList.remove("hidden");
    lb.classList.add("flex");
    document.body.classList.add("overflow-hidden");
  };

  const closeLightbox = () => {
    if (!lb) return;
    lb.classList.add("hidden");
    lb.classList.remove("flex");
    document.body.classList.remove("overflow-hidden");
  };

  const updateLightbox = () => {
    const item = MOCK.gallery[currentIndex];
    if (!item || !lbImg) return;
    lbImg.src = item.url;
    lbImg.alt = item.alt;
    if (lbCaption) lbCaption.textContent = `${item.alt} — ${item.category}`;
  };

  const navLightbox = (dir) => {
    currentIndex = (currentIndex + dir + MOCK.gallery.length) % MOCK.gallery.length;
    updateLightbox();
  };

  // Event delegation para imágenes generadas dinámicamente
  grid.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-gallery-trigger]");
    if (!trigger) return;
    openLightbox(parseInt(trigger.dataset.index, 10));
  });

  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbPrev) lbPrev.addEventListener("click", () => navLightbox(-1));
  if (lbNext) lbNext.addEventListener("click", () => navLightbox(1));

  // Click backdrop
  if (lb) {
    lb.addEventListener("click", (e) => {
      if (e.target === lb) closeLightbox();
    });
  }

  // Teclado
  document.addEventListener("keydown", (e) => {
    if (!lb || lb.classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navLightbox(-1);
    if (e.key === "ArrowRight") navLightbox(1);
  });
})();
