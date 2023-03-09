import { apiForecast, apiGeocoder, apiTimeZone, apiWeather } from "./api.js";
import { cardForecast, cardWeather } from "./card.js";
import { slider } from "./slider.js";

const $LAYER = document.querySelector(".layer-exit");
const $FORM = document.querySelector("[data-form]");
const $FOOTER_FORECAST = document.querySelector("[data-rol='footer']");
slider();
$FORM.addEventListener("pointerdown", async (e) => {
  if (e.target.matches("#search-button")) {
    if ($FOOTER_FORECAST.children.length !== 0) {
      $FOOTER_FORECAST.innerHTML = "";
    }
    let res = await apiGeocoder($FORM.firstElementChild.value);
    let objWeather = await apiWeather(...res);
    let objForecast = await apiForecast(...res);
    let objTimeZone = await apiTimeZone(...res);
    cardWeather(objWeather, $FORM.firstElementChild.value, objTimeZone);
    $FOOTER_FORECAST.append(...cardForecast(objForecast));
    $FOOTER_FORECAST.classList.add(
      `w-[${$FOOTER_FORECAST.lastElementChild.offsetLeft}]px`
    );
    $FORM.firstElementChild.value = "";
  }
});
$LAYER.addEventListener("pointerdown", (e) => {
  e.target.parentElement.parentElement.classList.add("translate-y-[-100%]");
});
