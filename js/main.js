const menu_button = document.querySelector("#menu-principal button");
menu_button.addEventListener("click", () => {
  document.querySelector("#menu-principal .menu").classList.toggle("active");
});
