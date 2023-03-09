export function slider() {
  const $FOOTER = document.getElementById("footer"),
    $FOOTER_FORECAST = document.querySelector("[data-rol='footer']");
  let cont = $FOOTER.clientWidth >= 540 ? 3 : 2;
  console.log($FOOTER.clientWidth);
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
