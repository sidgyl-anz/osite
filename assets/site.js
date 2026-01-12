const tabs = document.querySelectorAll("[data-tab]");
const tabPanels = document.querySelectorAll("[data-panel]");

if (tabs.length) {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");
      tabs.forEach((t) => t.classList.remove("active"));
      tabPanels.forEach((panel) => panel.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(`[data-panel='${target}']`)?.classList.add("active");
    });
  });
}

const personaButtons = document.querySelectorAll("[data-persona]");
const personaPanels = document.querySelectorAll("[data-persona-panel]");

if (personaButtons.length) {
  personaButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-persona");
      personaButtons.forEach((btn) => btn.classList.remove("active"));
      personaPanels.forEach((panel) => panel.classList.remove("active"));
      button.classList.add("active");
      document.querySelector(`[data-persona-panel='${target}']`)?.classList.add("active");
    });
  });
}

const modal = document.querySelector(".video-modal");
const modalTrigger = document.querySelector(".video-trigger");
const modalClose = document.querySelector(".video-close");

if (modal && modalTrigger && modalClose) {
  modalTrigger.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.add("active");
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });
}
