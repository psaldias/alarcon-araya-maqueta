const menu_button = document.querySelector("#menu-principal button");
menu_button.addEventListener("click", () => {
  document.querySelector("#menu-principal .menu").classList.toggle("active");
});

const swiper = new Swiper(".swiper-clientes", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
