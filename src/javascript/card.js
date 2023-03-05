import { ICONS } from "./weather_img_info.js";

export function cardWeather(
  { weather, main: { humidity, temp }, timezone, sys: { country } },
  name
) {
  let wea = weather[0];
  const $GRADOS_H1 = document.querySelector("h1"),
    $HUMEDAD_H3 = document.querySelector("[data-rol='humedad']"),
    $HORA_H3 = document.querySelector('[data-rol="Hora"]'),
    $CIUDAD_H3 = document.querySelector("[data-rol='ciudad']"),
    $CALENDARIO_H3 = document.querySelector("[data-rol='calendario']"),
    $ICON_WEATHER = document.querySelector("[data-rol='icon']"),
    $ICON_TER = document.querySelector("[data-rol='termometro']");
  $CIUDAD_H3.innerHTML = `${name} <span class="text-xs">${country}</span>`;
  $HUMEDAD_H3.textContent = humidity;
  $GRADOS_H1.textContent = `${Math.floor(temp - 273.15)}º`;
  if (Math.floor(temp - 273.15) <= 10) {
    $ICON_TER.src = "./src/images/Icons/termometroF.png";
  } else {
    $ICON_TER.src = "./src/images/Icons/termometroC.png";
  }
  $ICON_TER.alt = "icon termometro";
  $ICON_WEATHER.src = ICONS[wea.main];
  $ICON_WEATHER.alt = `icons ${wea.main}`;
}
