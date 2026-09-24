// =====================================================
//  MOCK DATA - Manicura Landing Page
//  Todos los datos son ficticios para el template
// =====================================================

const MOCK = {
  // ------- Información del negocio -------
  business: {
    name: "Bella Uñas Studio",
    tagline: "Donde tus manos cuentan tu historia",
    phone: "+34 612 345 678",
    whatsapp: "34612345678",
    email: "hola@bellauñas.es",
    address: "Av. de la Belleza 123, 28001 Madrid",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.7378947283944!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d4c4b5b0b%3A0x5b1e6e9b8e0c0b0a!2sPuerta%20del%20Sol!5e0!3m2!1ses!2ses!4v1700000000000",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
    whatsappUrl: "https://wa.me/34612345678",
    foundedYear: 2015,
  },

  // ------- Horarios de atención -------
  businessHours: [
    { day: "Lunes",          open: "10:00", close: "20:00" },
    { day: "Martes",         open: "10:00", close: "20:00" },
    { day: "Miércoles",      open: "10:00", close: "20:00" },
    { day: "Jueves",         open: "10:00", close: "21:00" },
    { day: "Viernes",        open: "10:00", close: "21:00" },
    { day: "Sábado",         open: "09:30", close: "21:00" },
    { day: "Domingo",        open: "Cerrado", close: "" },
  ],

  // ------- Estadísticas (contadores animados) -------
  stats: [
    { value: 10,  suffix: "+", label: "Años de experiencia" },
    { value: 2500, suffix: "+", label: "Clientas felices" },
    { value: 15,  suffix: "",  label: "Manicuristas expertas" },
    { value: 50,  suffix: "+", label: "Diseños exclusivos" },
  ],

  // ------- Servicios -------
  services: [
    {
      id: "manicura-basica",
      category: "Manicura",
      icon: "fa-hand-sparkles",
      name: "Manicura Clásica",
      description: "Limpieza, limado, cutículas y esmaltado tradicional con tu color favorito.",
      duration: "30 min",
      fromPrice: 15,
      featured: true,
    },
    {
      id: "manicura-gel",
      category: "Manicura",
      icon: "fa-gem",
      name: "Manicura Gel",
      description: "Esmaltado semipermanente con acabado brillante y duración de hasta 3 semanas.",
      duration: "45 min",
      fromPrice: 30,
      featured: true,
    },
    {
      id: "manicura-rusa",
      category: "Manicura",
      icon: "fa-star",
      name: "Manicura Rusa",
      description: "Técnica precisa con torno para cutículas perfectas y acabado impecable.",
      duration: "60 min",
      fromPrice: 40,
      featured: false,
    },
    {
      id: "pedicura-spa",
      category: "Pedicura",
      icon: "fa-spa",
      name: "Pedicura Spa",
      description: "Exfoliación, masaje relajante, hidratación profunda y esmaltado.",
      duration: "60 min",
      fromPrice: 35,
      featured: true,
    },
    {
      id: "pedicura-gel",
      category: "Pedicura",
      icon: "fa-leaf",
      name: "Pedicura con Gel",
      description: "Pedicura completa con esmaltado semipermanente para pies perfectos.",
      duration: "75 min",
      fromPrice: 45,
      featured: false,
    },
    {
      id: "nail-art",
      category: "Nail Art",
      icon: "fa-palette",
      name: "Nail Art Personalizado",
      description: "Diseños únicos a mano alzada: flores, geometría, minimalismo y mucho más.",
      duration: "60 min",
      fromPrice: 50,
      featured: true,
    },
    {
      id: "extension-acrilico",
      category: "Uñas Esculpidas",
      icon: "fa-magic",
      name: "Extensiones Acrílicas",
      description: "Uñas largas, resistentes y moldeadas a tu estilo con técnica profesional.",
      duration: "120 min",
      fromPrice: 70,
      featured: false,
    },
    {
      id: "soft-gel",
      category: "Uñas Esculpidas",
      icon: "fa-feather",
      name: "Extensiones Soft Gel",
      description: "Extensiones naturales y flexibles con tips de gel, ideales para el día a día.",
      duration: "90 min",
      fromPrice: 65,
      featured: false,
    },
    {
      id: "tratamiento-reparador",
      category: "Tratamientos",
      icon: "fa-heart",
      name: "Tratamiento Reparador",
      description: "Hidratación profunda con keratina y aceite de argán para uñas dañadas.",
      duration: "30 min",
      fromPrice: 20,
      featured: false,
    },
    {
      id: "diseno-flores",
      category: "Nail Art",
      icon: "fa-fan",
      name: "Diseño Floral 3D",
      description: "Decoración en relieve con efecto tridimensional y detalles únicos.",
      duration: "75 min",
      fromPrice: 60,
      featured: false,
    },
  ],

  // ------- Proceso / pasos -------
  processSteps: [
    { icon: "fa-calendar-check", title: "Reserva tu cita",    desc: "Elige día y hora online o por WhatsApp." },
    { icon: "fa-hand-holding-heart", title: "Asesoramiento",  desc: "Escuchamos tu estilo y te aconsejamos." },
    { icon: "fa-paint-brush",    title: "Creamos tu diseño",   desc: "Trabajamos con productos premium." },
    { icon: "fa-face-smile-beam", title: "¡Lista para brillar!", desc: "Sal con una sonrisa y uñas perfectas." },
  ],

  // ------- Equipo -------
  team: [
    {
      name: "Lucía Martín",
      role: "Fundadora & Nail Artist",
      bio: "Apasionada del nail art desde hace 12 años. Especialista en diseños minimalistas y técnicas avanzadas.",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80",
      specialty: "Nail Art Minimalista",
    },
    {
      name: "Sofía Reyes",
      role: "Manicurista Senior",
      bio: "Experta en manicura rusa y extensiones. Formadora de nuevas generaciones de manicuristas.",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=80",
      specialty: "Manicura Rusa",
    },
    {
      name: "Carla Núñez",
      role: "Especialista en Pedicura",
      bio: "Convertirá tus pies en una obra de arte. Apasionada por los tratamientos spa relajantes.",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
      specialty: "Pedicura Spa",
    },
    {
      name: "Andrea Vidal",
      role: "Diseñadora de Uñas",
      bio: "Creativa y detallista. Le encanta crear diseños únicos que sorprendan a cada clienta.",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
      specialty: "Diseños 3D y Decoración",
    },
  ],

  // ------- Galería -------
  gallery: [
    { id: 1,  category: "Manicura", alt: "Manicura francesa clásica",     url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop&q=80" },
    { id: 2,  category: "Nail Art", alt: "Diseño floral delicado",       url: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?w=800&auto=format&fit=crop&q=80" },
    { id: 3,  category: "Manicura", alt: "Esmaltado rojo elegante",       url: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=800&auto=format&fit=crop&q=80" },
    { id: 4,  category: "Diseños",  alt: "Uñas con glitter dorado",       url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&auto=format&fit=crop&q=80" },
    { id: 5,  category: "Pedicura", alt: "Pedicura spa relajante",        url: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&auto=format&fit=crop&q=80" },
    { id: 6,  category: "Nail Art", alt: "Diseño geométrico moderno",     url: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=800&auto=format&fit=crop&q=80" },
    { id: 7,  category: "Manicura", alt: "Manicura nude con brillo",      url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop&q=80" },
    { id: 8,  category: "Diseños",  alt: "Uñas acrílicas largas",         url: "https://images.unsplash.com/photo-1599948128020-9a44505b58fb?w=800&auto=format&fit=crop&q=80" },
    { id: 9,  category: "Pedicura", alt: "Pedicura con flores",            url: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?w=800&auto=format&fit=crop&q=80" },
    { id: 10, category: "Nail Art", alt: "Diseño minimalista",            url: "https://images.unsplash.com/photo-1632344004180-3d31a93b9f4d?w=800&auto=format&fit=crop&q=80" },
    { id: 11, category: "Manicura", alt: "Manicura gel rosa pastel",      url: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&auto=format&fit=crop&q=80" },
    { id: 12, category: "Diseños",  alt: "Arte en uñas abstracto",        url: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?w=800&auto=format&fit=crop&q=80" },
    { id: 13, category: "Pedicura", alt: "Pedicura con colores vivos",     url: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&auto=format&fit=crop&q=80" },
    { id: 14, category: "Nail Art", alt: "Decoración con purpurina",      url: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?w=800&auto=format&fit=crop&q=80" },
    { id: 15, category: "Manicura", alt: "Manicura francesa moderna",     url: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&auto=format&fit=crop&q=80" },
    { id: 16, category: "Diseños",  alt: "Diseño con pedrería",           url: "https://images.unsplash.com/photo-1632344004180-3d31a93b9f4d?w=800&auto=format&fit=crop&q=80" },
  ],

  // ------- Precios completos -------
  pricing: [
    {
      category: "Manicura",
      items: [
        { name: "Manicura Clásica",            price: 15,  duration: "30 min" },
        { name: "Manicura con Esmaltado Gel",  price: 30,  duration: "45 min" },
        { name: "Manicura Rusa",               price: 40,  duration: "60 min" },
        { name: "Manicura Express",            price: 12,  duration: "20 min" },
        { name: "Cambio de Esmalte",           price: 8,   duration: "15 min" },
      ],
    },
    {
      category: "Pedicura",
      items: [
        { name: "Pedicura Clásica",            price: 25,  duration: "45 min" },
        { name: "Pedicura Spa Completa",       price: 35,  duration: "60 min" },
        { name: "Pedicura con Gel",            price: 45,  duration: "75 min" },
        { name: "Tratamiento Pies Agrietados", price: 20,  duration: "30 min" },
      ],
    },
    {
      category: "Uñas Esculpidas",
      items: [
        { name: "Extensiones Acrílicas",       price: 70,  duration: "120 min" },
        { name: "Extensiones Soft Gel",        price: 65,  duration: "90 min" },
        { name: "Relleno Acrílico",            price: 45,  duration: "75 min" },
        { name: "Relleno Soft Gel",            price: 40,  duration: "60 min" },
        { name: "Retirada de Uñas",            price: 15,  duration: "30 min" },
      ],
    },
    {
      category: "Nail Art",
      items: [
        { name: "Diseño por Uña",              price: 5,   duration: "+15 min" },
        { name: "Nail Art Personalizado",      price: 50,  duration: "60 min" },
        { name: "Diseño Floral 3D",            price: 60,  duration: "75 min" },
        { name: "Efecto Ombré",                price: 25,  duration: "+30 min" },
        { name: "Aplicación de Strass",        price: 15,  duration: "+20 min" },
      ],
    },
    {
      category: "Tratamientos",
      items: [
        { name: "Tratamiento Reparador Keratina", price: 20, duration: "30 min" },
        { name: "Hidratación Profunda",           price: 18, duration: "25 min" },
        { name: "Parafina de Manos",              price: 22, duration: "30 min" },
        { name: "Exfoliación de Manos",           price: 15, duration: "20 min" },
      ],
    },
  ],

  // ------- Paquetes -------
  packages: [
    {
      name: "Básico",
      price: 25,
      highlight: false,
      features: [
        "Manicura Clásica",
        "Esmaltado tradicional",
        "Asesoramiento de color",
      ],
    },
    {
      name: "Premium",
      price: 55,
      highlight: true,
      features: [
        "Manicura Rusa",
        "Esmaltado Gel",
        "Tratamiento hidratante",
        "Masaje de manos 10 min",
      ],
    },
    {
      name: "VIP",
      price: 95,
      highlight: false,
      features: [
        "Manicura Rusa",
        "Nail Art personalizado",
        "Parafina de manos",
        "Tratamiento keratina",
        "Bebida de cortesía",
      ],
    },
  ],

  // ------- Clases -------
  classes: [
    {
      id: "basico-gel",
      name: "Curso de Esmaltado Gel",
      level: "Principiante",
      duration: "4 semanas",
      hoursWeek: "2 horas / semana",
      price: 120,
      description: "Aprende la técnica del esmaltado semipermanente desde cero. Incluye kit básico.",
      includes: ["Kit de inicio", "Manual didáctico", "Práctica en modelos", "Certificado"],
      icon: "fa-graduation-cap",
    },
    {
      id: "nail-art",
      name: "Nail Art Creativo",
      level: "Intermedio",
      duration: "6 semanas",
      hoursWeek: "3 horas / semana",
      price: 180,
      description: "Domina pinceladas, decoración 3D, foil, encapsulado y técnicas avanzadas.",
      includes: ["Kit completo de pinceles", "Materiales", "Práctica intensiva", "Certificado"],
      icon: "fa-palette",
    },
    {
      id: "extension-acrilico",
      name: "Extensiones Acrílicas",
      level: "Avanzado",
      duration: "8 semanas",
      hoursWeek: "4 horas / semana",
      price: 280,
      description: "Formación profesional completa en acrílico, limado y mantenimiento.",
      includes: ["Kit profesional", "Modelos reales", "Práctica supervisada", "Certificado oficial"],
      icon: "fa-magic-wand-sparkles",
    },
    {
      id: "automaquillaje",
      name: "Automaquillaje Express",
      level: "Principiante",
      duration: "1 sesión",
      hoursWeek: "2 horas (sábado)",
      price: 45,
      description: "Aprende a hacerte la manicura perfecta en casa con trucos profesionales.",
      includes: ["Materiales incluidos", "Guía personalizada", "Descuento en productos"],
      icon: "fa-hand-sparkles",
    },
  ],

  // ------- Horario semanal de clases -------
  classSchedule: {
    "Lunes":    [{ classId: "nail-art",       time: "10:00 - 13:00" }, { classId: "basico-gel",      time: "17:00 - 19:00" }],
    "Martes":   [{ classId: "extension-acrilico", time: "10:00 - 14:00" }],
    "Miércoles":[{ classId: "nail-art",       time: "10:00 - 13:00" }, { classId: "basico-gel",      time: "17:00 - 19:00" }],
    "Jueves":   [{ classId: "extension-acrilico", time: "10:00 - 14:00" }],
    "Viernes":  [{ classId: "nail-art",       time: "16:00 - 19:00" }],
    "Sábado":   [{ classId: "automaquillaje", time: "11:00 - 13:00" }, { classId: "basico-gel",      time: "16:00 - 18:00" }],
    "Domingo":  [],
  },

  // ------- Testimonios -------
  testimonials: [
    { name: "María G.",      role: "Clienta habitual", text: "Llevo 3 años viniendo y nunca me voy defraudada. Las manicuristas son encantadoras y el resultado siempre es impecable.", avatar: "https://i.pravatar.cc/100?img=5",  rating: 5 },
    { name: "Laura P.",      role: "Novia 2025",         text: "Mi manicura de boda fue perfecta. Me asesoraron en colores y diseño, ¡fue un éxito total! Las recomiendo 100%.",            avatar: "https://i.pravatar.cc/100?img=9",  rating: 5 },
    { name: "Patricia S.",   role: "Clienta VIP",        text: "El paquete VIP es una maravilla. Sales como nueva, las uñas increíbles y el masaje de manos es para repetir.",                avatar: "https://i.pravatar.cc/100?img=10", rating: 5 },
    { name: "Cristina M.",   role: "Estudiante",         text: "Hice el curso de nail art y aprendí muchísimo. Lucía es una profesora increíble, paciente y muy detallista.",                avatar: "https://i.pravatar.cc/100?img=16", rating: 5 },
    { name: "Beatriz L.",    role: "Clienta desde 2020", text: "La pedicura spa es lo mejor que me han hecho nunca. Trato exquisito, ambiente relajado y resultados duraderos.",            avatar: "https://i.pravatar.cc/100?img=20", rating: 5 },
    { name: "Elena R.",      role: "Mamá de familia",    text: "Lugar impecable, productos de calidad y muy buen trato. Voy con mis hijas y siempre salimos todas felices.",              avatar: "https://i.pravatar.cc/100?img=25", rating: 5 },
  ],

  // ------- FAQ -------
  faqs: [
    { q: "¿Cuánto dura una cita?",           a: "Depende del servicio: entre 30 minutos (manicura básica) y 2 horas (extensiones acrílicas). Te informaremos al reservar." },
    { q: "¿Necesito pedir cita previa?",     a: "Sí, trabajamos con cita previa para garantizarte una atención personalizada y sin esperas. Puedes reservar online o por WhatsApp." },
    { q: "¿Qué métodos de pago aceptáis?",   a: "Efectivo, tarjeta de crédito/débito, Bizum y Apple Pay / Google Pay." },
    { q: "¿Los productos son aptos para alérgicas?", a: "Trabajamos con marcas libres de tóxicos (5-free, 7-free). Si tienes alergias específicas, indícanoslo al reservar." },
    { q: "¿Puedo llevar mi propio diseño?",   a: "¡Por supuesto! Si tienes una foto o idea, la adaptamos a tus manos. También te asesoramos si no tienes claro qué quieres." },
    { q: "¿Ofrecéis servicio a domicilio?",   a: "Sí, bajo disponibilidad y con un suplemento según la zona. Consúltanos por WhatsApp." },
  ],

  // ------- Categorías galería -------
  galleryCategories: ["Todos", "Manicura", "Pedicura", "Nail Art", "Diseños"],
};

if (typeof window !== "undefined") window.MOCK = MOCK;
