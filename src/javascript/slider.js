export function slider() {
  const $FOOTER = document.getElementById("footer"),
    $FOOTER_FORECAST = document.querySelector("[data-rol='footer']");
  let cont = 2;
  if ($FOOTER.clientWidth >= 540 && $FOOTER.clientWidth < 900) {
    cont = 3;
  }
  if ($FOOTER.clientWidth >= 900) {
    cont = 5;
  }
  console.log(cont);
  let result = 0;
  $FOOTER.addEventListener("pointerdown", (e) => {
    const $FIRST = $FOOTER_FORECAST.firstElementChild;
    let width = $FIRST.clientWidth;
    if (e.target.matches("[data-rol='left'] *")) {
      result += width * cont;
      result = Math.min(result, 0);
      $FOOTER_FORECAST.style.marginLeft = `${result}px`;
    }
    if (e.target.matches("[data-rol='right'] *")) {
      result -= width * cont;
      result = Math.max(
        result,
        -width * ($FOOTER_FORECAST.children.length - cont)
      );
      $FOOTER_FORECAST.style.marginLeft = result + "px";
    }
  });
}
