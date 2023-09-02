//Stiky
window.onscroll = function showHeader() {
  const header = document.querySelector(".header-section");
  if (window.pageYOffset > 0) {
    header.classList.add("header_fixed");
  } else {
    header.classList.remove("header_fixed");
  }
};

// active class of menu items onscroll
window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;
  if (scrollDistance < 100) {
    document.querySelectorAll(".nav-wrap-desktop nav li").forEach((elem) => {
      elem.classList.remove("my-current");
    });
  }

  if (window.innerWidth > 768) {
    document.querySelectorAll(".section-menu").forEach((el, i) => {
      if (
        el.offsetTop -
          350 -
          document.querySelector(".nav-wrap-desktop nav").clientHeight <=
        scrollDistance
      ) {
        document.querySelectorAll(".nav-wrap-desktop nav li").forEach((el) => {
          if (el.classList.contains("my-current")) {
            el.classList.remove("my-current");
          }
        });

        document
          .querySelectorAll(".nav-wrap-desktop nav li")
          [i].classList.add("my-current");
      }
    });
  }
});
