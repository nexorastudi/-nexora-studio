(() => {
  "use strict";

  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");

  const setMenu = (open) => {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    const label = menuToggle.querySelector(".sr-only");
    if (label) label.textContent = open ? "Fermer le menu" : "Ouvrir le menu";
  };

  menuToggle?.addEventListener("click", () => {
    setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

  window.addEventListener("scroll", () => {
    header?.classList.toggle("is-sticky", window.scrollY > 24);
  }, { passive: true });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -30px" });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const processTabs = [...document.querySelectorAll("[data-process-tab]")];
  const processPanels = [...document.querySelectorAll("[data-process-panel]")];
  const activateProcess = (id) => {
    processTabs.forEach((tab) => {
      const active = tab.dataset.processTab === id;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    processPanels.forEach((panel) => {
      const active = panel.dataset.processPanel === id;
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
    });
  };

  processTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateProcess(tab.dataset.processTab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = (index + 1) % processTabs.length;
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextIndex = (index - 1 + processTabs.length) % processTabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = processTabs.length - 1;
      processTabs[nextIndex].focus();
      activateProcess(processTabs[nextIndex].dataset.processTab);
    });
  });

  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const projectCards = [...document.querySelectorAll("[data-category]")];
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      projectCards.forEach((card) => {
        const visible = filter === "all" || card.dataset.category === filter;
        card.hidden = !visible;
      });
    });
  });
})();
