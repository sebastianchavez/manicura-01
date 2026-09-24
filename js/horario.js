/* =====================================================
   horario.js - Renderizado dinámico del horario de clases
   ===================================================== */

(function () {
  "use strict";

  const container = document.getElementById("class-schedule");
  if (!container || typeof MOCK === "undefined") return;

  const classesById = Object.fromEntries(MOCK.classes.map((c) => [c.id, c]));
  const daysOrder = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  const levelColor = (level) => {
    if (level === "Principiante") return "bg-green-100 text-green-700";
    if (level === "Intermedio") return "bg-amber-100 text-amber-700";
    if (level === "Avanzado") return "bg-rose-100 text-rose-700";
    return "bg-gray-100 text-gray-700";
  };

  container.innerHTML = daysOrder
    .map((day) => {
      const dayClasses = MOCK.classSchedule[day] || [];
      return `
        <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-rose-100">
          <div class="bg-gradient-to-r from-rose-500 to-pink-500 px-5 py-3 text-white">
            <h3 class="font-semibold text-lg">${day}</h3>
          </div>
          <div class="p-5 space-y-3 min-h-[120px]">
            ${
              dayClasses.length === 0
                ? `<p class="text-gray-400 italic text-sm text-center py-6">Sin clases programadas</p>`
                : dayClasses
                    .map((slot) => {
                      const cls = classesById[slot.classId];
                      if (!cls) return "";
                      return `
                        <div class="border border-rose-100 rounded-xl p-3 hover:bg-rose-50/50 transition-colors">
                          <div class="flex items-start justify-between gap-3 mb-1">
                            <p class="font-semibold text-gray-800 text-sm">${cls.name}</p>
                            <span class="text-xs px-2 py-0.5 rounded-full ${levelColor(cls.level)} whitespace-nowrap">${cls.level}</span>
                          </div>
                          <p class="text-xs text-gray-500 flex items-center gap-1">
                            <i class="fa-regular fa-clock text-rose-400"></i> ${slot.time}
                          </p>
                        </div>
                      `;
                    })
                    .join("")
            }
          </div>
        </div>
      `;
    })
    .join("");
})();
