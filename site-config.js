/*
 * Datos editables del sitio.
 * Sustituye TODOS los valores de ejemplo por información verificada.
 * Cambia demo a false solo cuando el responsable, los servicios, la cobertura,
 * el horario y al menos un canal de contacto sean reales.
 * photo puede ser una ruta local, por ejemplo "./build/img/responsable.jpg".
 */
window.SITE_CONFIG = {
  demo: true,
  practice: {
    name: "Servicio de catéteres PICC (ejemplo)",
    coverage: "Ciudad y zona por confirmar",
    settings: "Hospital, clínica o domicilio por confirmar",
    hours: "Horario por confirmar"
  },
  clinician: {
    name: "Nombre del responsable clínico",
    role: "Cargo profesional por confirmar",
    credentials: "Formación y capacitación por confirmar",
    registration: "Cédula o registro por confirmar",
    photo: ""
  },
  services: [
    {
      title: "Valoración del acceso",
      description: "Ejemplo de servicio. Confirma si se realiza y bajo qué condiciones antes de publicarlo."
    },
    {
      title: "Colocación de PICC",
      description: "Ejemplo de servicio. Confirma quién realiza el procedimiento y dónde se lleva a cabo."
    },
    {
      title: "Seguimiento y mantenimiento",
      description: "Ejemplo de servicio. Confirma el alcance del seguimiento y quién será responsable."
    }
  ],
  process: [
    "Comparte la indicación y los datos necesarios para valorar la solicitud.",
    "Confirma disponibilidad, lugar de atención y responsable clínico.",
    "Recibe las indicaciones de preparación y seguimiento del equipo de salud."
  ],
  contact: {
    whatsapp: "",
    email: ""
  }
};
