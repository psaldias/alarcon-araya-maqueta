const menu_button = document.querySelector("#menu-principal button");
menu_button.addEventListener("click", () => {
  document.querySelector("#menu-principal .menu").classList.toggle("active");
});

const btn_areas_movil = document.getElementById("btn-areas-movil");
if (btn_areas_movil) {
  const botonera_areas = document.getElementById("botonera-areas");
  const botonera_areas_links = document.querySelectorAll("#botonera-areas a");
  btn_areas_movil.addEventListener("click", () => {
    document.getElementById("botonera-areas").classList.toggle("hidden");
  });
  botonera_areas_links.forEach(function (e) {
    e.addEventListener("click", () => {
      botonera_areas.classList.add("hidden");
    });
  });
}

const swiper_clientes = document.getElementsByClassName("swiper-clientes");
if (swiper_clientes.length > 0) {
  const swiper = new Swiper(".swiper-clientes", {
    // Optional parameters
    loop: true,
    autoHeight: true,

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
}

const swiper_reconocimientos = document.getElementsByClassName(
  "swiper-reconocimientos"
);
if (swiper_reconocimientos.length > 0) {
  const swiper = new Swiper(".swiper-reconocimientos", {
    // Optional parameters

    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 20,
    centeredSlidesBounds: true,
    height: 500,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 20,
        centeredSlidesBounds: false,
      },
    },
  });
}
