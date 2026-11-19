(() => {
  "use strict";

  if (!window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const elements = document.querySelectorAll(
    ".hero-content,.hero-visual,.section-heading,.audience-card,.feature-card,.professional-grid > *," +
    ".service-card,.decision-panel,.team-grid > *, .product-grid > *, .consultation-grid > *," +
    ".faq-grid > *, .contact-grid > *, .share-inner > *"
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {threshold:0.08, rootMargin:"0px 0px -4% 0px"});

  elements.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
  });
  document.documentElement.classList.add("motion-ready");
  requestAnimationFrame(() => elements.forEach((element) => observer.observe(element)));
})();
