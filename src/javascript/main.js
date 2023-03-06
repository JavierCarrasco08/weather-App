import { apiForecast, apiGeocoder, apiTimeZone, apiWeather } from "./api.js";
import { cardForecast, cardWeather } from "./card.js";

const $LAYER = document.querySelector(".layer-exit");
const $FORM = document.querySelector("[data-form]");
const $FOOTER_FORECAST = document.querySelector("[data-rol='footer']");
$FORM.addEventListener("pointerdown", async (e) => {
  if (e.target.matches("#search-button")) {
    let res = await apiGeocoder($FORM.firstElementChild.value);
    let objWeather = await apiWeather(...res);
    // let objForecast = await apiForecast(...res);
    let objTimeZone = await apiTimeZone(...res);
    cardWeather(objWeather, $FORM.firstElementChild.value, objTimeZone);
    // $FOOTER_FORECAST.append(...cardForecast(objForecast));
    $FORM.firstElementChild.value = "";
  }
});
$LAYER.addEventListener("pointerdown", (e) => {
  e.target.parentElement.parentElement.classList.add("translate-y-[-100%]");
});
