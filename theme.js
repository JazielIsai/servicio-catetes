(() => {
  "use strict";

  const key = "cateteres-theme";
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  let preference = "auto";
  try {
    const saved = window.localStorage.getItem(key);
    if (saved === "light" || saved === "dark") preference = saved;
  } catch {
    // Private browsing can block storage; the selector still works for this visit.
  }

  const apply = () => {
    const theme = preference === "auto" ? (systemDark.matches ? "dark" : "light") : preference;
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0d1f2c" : "#f7f9fb");
  };

  apply();
  systemDark.addEventListener("change", () => {
    if (preference === "auto") apply();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("theme-select");
    if (!selector) return;
    selector.value = preference;
    selector.addEventListener("change", () => {
      preference = selector.value;
      try {
        if (preference === "auto") window.localStorage.removeItem(key);
        else window.localStorage.setItem(key, preference);
      } catch {
        // Keep the current selection even when storage is unavailable.
      }
      apply();
    });
  });
})();
