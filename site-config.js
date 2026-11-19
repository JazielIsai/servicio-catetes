/*
 * Datos editables del sitio.
 * Sustituye TODOS los valores de ejemplo por información verificada.
 * Cambia demo a false solo cuando el responsable, la revisión clínica, los
 * servicios, la cobertura, el horario y al menos un canal de contacto sean reales.
 * photo puede ser una ruta local, por ejemplo "./build/img/responsable.jpg".
 */
window.SITE_CONFIG = {
  demo: true,
  practice: {
    name: "Servicio de catéteres PICC (ejemplo)",
    coverage: "Ejemplo: Ciudad de México y zona metropolitana; cobertura no disponible",
    settings: "Ejemplo: hospital o clínica autorizada; sede no definida",
    hours: "Ejemplo: lunes a viernes; horario no disponible"
  },
  clinician: {
    name: "Responsable clínico por designar",
    role: "Cargo profesional pendiente de verificación",
    credentials: "Formación y capacitación pendientes de verificación",
    registration: "Registro profesional pendiente de verificación",
    photo: ""
  },
  clinicalReview: {
    verified: false,
    status: "Revisión clínica pendiente",
    reviewer: "Profesional revisor por designar",
    date: "Fecha de revisión por confirmar"
  },
  services: [
    {
      title: "Valoración del acceso",
      description: "Ejemplo de alcance: revisar la indicación y las necesidades del tratamiento con el equipo tratante. Disponibilidad por confirmar."
    },
    {
      title: "Colocación de PICC",
      description: "Ejemplo de alcance: coordinar el procedimiento en un entorno autorizado, con personal capacitado. Responsable y sede por confirmar."
    },
    {
      title: "Seguimiento y mantenimiento",
      description: "Ejemplo de alcance: educación inicial y plan de seguimiento definido por el equipo de salud. Frecuencia y responsable por confirmar."
    }
  ],
  beforeRequest: [
    "Quién hará la valoración y cuáles son sus credenciales.",
    "Dónde se realizaría el procedimiento y qué incluye el servicio.",
    "Cómo se organizarían el mantenimiento, el seguimiento y los costos."
  ],
  process: [
    "Consulta con tu equipo tratante si corresponde valorar un PICC.",
    "Confirma disponibilidad, lugar de atención y responsable clínico.",
    "Recibe las indicaciones de preparación y seguimiento del equipo de salud."
  ],
  share: {
    title: "Catéteres PICC | Guía informativa de demostración",
    text: "Guía de prueba sobre catéteres PICC para preparar preguntas al equipo de salud. No ofrece atención ni sustituye una valoración clínica.",
    url: "https://jazielisai.github.io/servicio-catetes/"
  },
  contact: {
    whatsapp: "",
    email: ""
  }
};
