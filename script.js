  const navBar = document.querySelector("#nav-bar");
  const toggle = document.querySelector(".nav-toggle");

  toggle.addEventListener("click", () => {
    const isOpen = navBar.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  const backToTop = document.querySelector("#back-to-top");
  const offers = document.querySelector("#ofertas");

  const updateBackToTopVisibility = () => {
    backToTop.classList.toggle("is-visible", offers.getBoundingClientRect().bottom <= 0);
  };

  window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
  updateBackToTopVisibility();

  backToTop.addEventListener("click", () => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";

    window.scrollTo({ top: 0, behavior });
  });
