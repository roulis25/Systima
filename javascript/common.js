function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const button = document.querySelector('[data-menu-toggle]');
  if (!nav) {
    return;
  }
  const isOpen = !nav.classList.contains("show");
  nav.classList.toggle("active", isOpen);
  nav.classList.toggle("show", isOpen);
  if (button) {
    button.setAttribute("aria-expanded", String(isOpen));
  }
}

function closeMenu() {
  const nav = document.getElementById("navLinks");
  const button = document.querySelector('[data-menu-toggle]');

  if (nav) {
    nav.classList.remove("active", "show");
  }
  if (button) {
    button.setAttribute("aria-expanded", "false");
  }
}

document.addEventListener("click", (event) => {
  const nav = document.getElementById("navLinks");
  const button = document.querySelector('[data-menu-toggle]');

  if (!nav || !button || window.innerWidth > 768) {
    return;
  }

  if (!nav.contains(event.target) && !button.contains(event.target)) {
    closeMenu();
  }
});

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      closeMenu();
    }
  });
});

const nextField = document.querySelector("[data-form-next]");

if (nextField && window.location.origin !== "null") {
  nextField.value = new URL("thanks.html", window.location.href).href;
}
