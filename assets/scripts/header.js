document.addEventListener("DOMContentLoaded", () => {
  let burgerMenu = document.querySelector(".menu__icon");
  let menu = document.querySelector(".menu__navigation");
  burgerMenu.addEventListener("click", () => {
    if (menu.classList.contains("menu__navigation--active")) {
      menu.classList.remove("menu__navigation--active");

      burgerMenu.classList.remove("active");
    } else {
      menu.classList.add("menu__navigation--active");
      console.log(menu.classList);

      burgerMenu.classList.add("active");
    }
  });
});
