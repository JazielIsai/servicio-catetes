(() => {
  "use strict";

  const config = window.SITE_CONFIG;
  if (!config) return;

  const whatsappNumber = (config.contact?.whatsapp || "").replace(/\D/g, "");
  const emailAddress = (config.contact?.email || "").trim();
  const hasContact = /^\d{10,15}$/.test(whatsappNumber) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
  const isRealText = (value) => typeof value === "string" && value.trim()
    && !/ejemplo|por confirmar|por designar|pendiente|demostraci[oó]n|de prueba|no disponible/i.test(value);
  const hasRealDetails = [
    config.practice?.name,
    config.practice?.coverage,
    config.practice?.settings,
    config.practice?.hours,
    config.clinician?.name,
    config.clinician?.role,
    config.clinician?.credentials,
    config.clinician?.registration,
    config.clinicalReview?.status,
    config.clinicalReview?.reviewer,
    config.clinicalReview?.date,
    config.share?.title,
    config.share?.text
  ].every(isRealText) && Array.isArray(config.services) && config.services.length > 0
    && config.services.every((service) => isRealText(service.title) && isRealText(service.description))
    && config.clinicalReview?.verified === true;
  const demo = config.demo !== false || !hasRealDetails || !hasContact;
  const getValue = (path) => path.split(".").reduce((value, key) => value?.[key], config);

  document.querySelectorAll("[data-site-text]").forEach((node) => {
    const value = getValue(node.dataset.siteText);
    if (typeof value === "string" && value.trim()) node.textContent = value.trim();
  });

  if (!demo) {
    document.getElementById("demo-banner")?.setAttribute("hidden", "");
    document.querySelectorAll("[data-demo-only]").forEach((node) => node.setAttribute("hidden", ""));
    document.querySelector(".review-state")?.classList.add("review-state--verified");
  }

  const photo = document.getElementById("clinician-photo");
  if (photo && config.clinician?.photo) {
    photo.src = config.clinician.photo;
    photo.alt = `Retrato de ${config.clinician.name}`;
    photo.hidden = false;
  }

  const services = document.getElementById("service-grid");
  if (services && Array.isArray(config.services)) {
    config.services.forEach((service, index) => {
      const card = document.createElement("article");
      card.className = "service-card";
      const label = document.createElement("span");
      label.className = "service-index";
      label.textContent = String(index + 1).padStart(2, "0");
      const title = document.createElement("h3");
      title.textContent = service.title || "Servicio por confirmar";
      const description = document.createElement("p");
      description.textContent = service.description || "";
      card.append(label, title, description);
      if (demo) {
        const badge = document.createElement("span");
        badge.className = "demo-tag";
        badge.textContent = "Ejemplo";
        card.append(badge);
      }
      services.append(card);
    });
  }

  const beforeRequest = document.getElementById("before-request-list");
  if (beforeRequest && Array.isArray(config.beforeRequest)) {
    config.beforeRequest.forEach((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      beforeRequest.append(item);
    });
  }

  const process = document.getElementById("process-list");
  if (process && Array.isArray(config.process)) {
    config.process.forEach((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      process.append(item);
    });
  }

  const whatsapp = document.getElementById("contact-whatsapp");
  const email = document.getElementById("contact-email");
  const actions = document.getElementById("contact-actions");
  const demoNote = document.getElementById("contact-demo");
  if (!demo && /^\d{10,15}$/.test(whatsappNumber) && whatsapp) {
    whatsapp.href = `https://wa.me/${whatsappNumber}`;
    whatsapp.hidden = false;
  }
  if (!demo && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress) && email) {
    email.href = `mailto:${emailAddress}`;
    email.hidden = false;
  }
  if (actions && ((whatsapp && !whatsapp.hidden) || (email && !email.hidden))) {
    actions.hidden = false;
    if (demoNote) demoNote.hidden = true;
  }

  const shareButton = document.getElementById("share-button");
  const shareFeedback = document.getElementById("share-feedback");
  shareButton?.addEventListener("click", async () => {
    const title = config.share?.title || document.title;
    const description = config.share?.text || "";
    const url = config.share?.url || window.location.href.split("#")[0];
    const message = [title, description, url].filter(Boolean).join("\n\n");
    try {
      await navigator.clipboard.writeText(message);
      if (shareFeedback) shareFeedback.textContent = demo
        ? "Texto y enlace copiados. Incluye el aviso de demostración al compartirlos."
        : "Texto y enlace copiados.";
    } catch {
      if (shareFeedback) shareFeedback.textContent = `Puedes copiar este enlace: ${url}`;
    }
  });
})();
