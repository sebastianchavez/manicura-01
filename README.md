# Bella Uñas Studio - Landing Page Template

Template completo de landing page para un salón de servicios de manicura. **Listo para usar**: solo abre `index.html` en tu navegador.

## Stack técnico

- **HTML5** puro (MPA - Multi Page Application, sin frameworks)
- **Tailwind CSS** vía CDN
- **JavaScript** nativo (vanilla)
- **Font Awesome** para iconos
- **Google Fonts** (Playfair Display + Inter)
- Imágenes vía URLs de **Unsplash** (sin dependencias locales)

## Estructura del proyecto

```
manicura-01/
├── index.html              # Inicio (hero + servicios destacados + stats + testimonios)
├── sobre-nosotros.html     # Historia + equipo + valores
├── servicios.html          # Catálogo completo de servicios
├── galeria.html            # Galería con filtros + lightbox
├── precios.html            # Lista de precios + paquetes + FAQ
├── horario-clases.html     # Cursos + calendario semanal + formulario
├── contacto.html           # Formulario + mapa + horarios + redes
├── privacidad.html         # Política de privacidad
├── terminos.html           # Términos y condiciones
│
├── css/
│   └── styles.css          # Estilos personalizados (animaciones, navbar, etc.)
│
├── js/
│   ├── data.js             # ⭐ Todos los datos mockeados (servicios, equipo, galería…)
│   ├── main.js             # Navbar, animaciones scroll, contadores, FAQ
│   ├── gallery.js          # Render galería + filtros + lightbox
│   ├── contact.js          # Validación y envío del formulario
│   └── horario.js          # Render dinámico del horario de clases
│
└── assets/
    └── logo.svg            # Logo del salón
```

## Cómo usar

### Visualización local

1. Descarga o clona el repositorio.
2. Abre `index.html` en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).
3. ¡Listo! No requiere build step, instalación ni servidor.

```bash
# Opcional: servir con un servidor local (recomendado para ver el mapa)
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server
```

Luego abre `http://localhost:8000`.

### Personalización rápida

Toda la información del negocio está centralizada en **`js/data.js`**. Edita ese único archivo para cambiar:

- Nombre del salón, teléfono, email, dirección
- Lista de servicios y precios
- Equipo
- Galería de imágenes (sustituye las URLs de Unsplash por las tuyas)
- Horarios de atención
- Cursos y horarios de clases
- Testimonios
- Preguntas frecuentes
- Estadísticas

Ejemplo:

```js
const MOCK = {
  business: {
    name: "Tu Salón",
    phone: "+34 600 000 000",
    email: "info@tusalon.com",
    address: "Calle Mayor 1, Madrid",
    // ...
  },
  services: [
    { name: "Manicura Básica", price: 15, /* ... */ }
  ]
  // ...
};
```

### Cambiar paleta de colores

Edita el bloque `tailwind.config` en cada HTML (o muévelo a un archivo JS compartido si prefieres):

```js
tailwind.config = {
  theme: { extend: {
    colors: {
      brand: {
        50:  '#fff1f2',
        100: '#ffe4e6',
        500: '#f43f5e',
        700: '#be123c',
        // ...
      }
    }
  }}
}
```

Después busca y reemplaza las clases `rose-*` por `brand-*` en todos los HTML si quieres un rebranding completo.

## Páginas incluidas

| Página                 | Contenido                                                              |
| ---------------------- | ---------------------------------------------------------------------- |
| **Inicio**             | Hero, servicios destacados, valores, stats animadas, testimonios, CTA |
| **Sobre nosotros**     | Historia, equipo (4 personas), valores                                 |
| **Servicios**          | Catálogo dinámico (10 servicios) + proceso en 4 pasos                  |
| **Galería**            | 16 imágenes con filtros por categoría y lightbox modal                |
| **Precios**            | Lista detallada, 3 paquetes especiales, FAQ acordeón                   |
| **Horario de clases**  | 4 cursos + calendario semanal dinámico + formulario de inscripción     |
| **Contacto**           | Formulario, mapa, horarios de atención, redes sociales                 |
| **Privacidad**         | Texto legal completo (RGPD)                                            |
| **Términos**           | Condiciones del servicio                                               |

## Funcionalidades JS

- ✅ Navbar fija con efecto shrink al hacer scroll
- ✅ Menú hamburguesa en móvil con animación
- ✅ Animaciones on-scroll (fade-up, fade-left, zoom-in) vía IntersectionObserver
- ✅ Contadores animados
- ✅ Lightbox para galería (con teclado: ← → ESC)
- ✅ Filtros dinámicos por categoría
- ✅ FAQ acordeón
- ✅ Validación de formularios con shake animation y feedback
- ✅ Formulario de contacto simulado (muestra "Enviando..." y mensaje de éxito)
- ✅ Botón scroll-to-top
- ✅ Resaltado del enlace activo en la navbar

## Compatibilidad

- ✅ Chrome / Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Móvil (iOS Safari, Chrome Android)
- ⚠️ IE11 no soportado

## Licencia

Template de demostración. Imágenes vía Unsplash (uso libre). Font Awesome via CDN (CC BY 4.0).

---

**Hecho con** ❤️ **y mucho brillo** ✨
