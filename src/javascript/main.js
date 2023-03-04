import { apiGeocoder, apiWeather } from "./api.js";
import { cardWeather } from "./card.js";

const $LAYER = document.querySelector(".layer-exit");
const $FORM = document.querySelector("[data-form]");
$FORM.addEventListener("pointerdown", async (e) => {
  if (e.target.matches("#search-button")) {
    let res = await apiGeocoder($FORM.firstElementChild.value);
    let objWeather = await apiWeather(...res);
    console.log(objWeather);
    cardWeather(objWeather);
    $FORM.firstElementChild.value = "";
  }
});
$LAYER.addEventListener("pointerdown", (e) => {
  e.target.parentElement.parentElement.classList.add("translate-y-[-100%]");
});
