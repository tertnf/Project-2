(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const linkMobileMenu = document.querySelectorAll(".mobile-menu-link");
  const allMenuLinks = document.querySelectorAll(".mobile-menu-list li");
  console.log(allMenuLinks);

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    closeMenuBtn.classList.toggle("is-none");
    openMenuBtn.classList.toggle("is-none");
    console.log("ok");
    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    // bodyScrollLock[scrollLockMethod](document.body);

    allMenuLinks.forEach((item) => {
      item.classList.toggle("link-fade");
    });
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);
  // const aboutSection = document.querySelector("#about");
  // const scrollToAbout = document.querySelector('a[href="#about"]');
  linkMobileMenu.forEach((item) => {
    item.addEventListener("click", toggleMenu);
  });
  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
