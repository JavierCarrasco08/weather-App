const $layer = document.querySelector(".layer-exit");

$layer.addEventListener("pointerdown", (e) => {
  console.log("SI");
  e.target.parentElement.parentElement.classList.add("translate-y-[-100%]");
});
