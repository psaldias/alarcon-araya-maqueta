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
    spaceBetween: 10,
    centeredSlidesBounds: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
        centeredSlides: true,
        centeredSlidesBounds: true,
      },
    },
  });
}

const swiper_home = document.getElementsByClassName("swiper-home");
if (swiper_home.length > 0) {
  const swiper = new Swiper(".swiper-home", {
    // Optional parameters
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,

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
