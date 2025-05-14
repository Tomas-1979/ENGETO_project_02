// Získání ikony z HTML
const scrollToTopBtn = document.querySelector(".scroll-button") as HTMLElement;

// Funkce pro zobrazení/skrytí ikony scroll-button
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn?.classList.remove("hidden-button");
  } else {
    scrollToTopBtn?.classList.add("hidden-button");
  }
});

// Funkce pro posun stránky nahoru
scrollToTopBtn?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // jistota pro různé prohlížeče
  });
});
