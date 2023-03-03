const $layer = document.querySelector(".layer-exit");

$layer.addEventListener("pointerdown", (e) => {
  e.target.parentElement.parentElement.classList.add("translate-y-[-100%]");
});
