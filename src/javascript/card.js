import { ICONS } from "./weather_img_info.js";

export function cardWeather({
  name,
  weather,
  main: { humidity, temp },
  timezone,
}) {
  console.log(timezone);
  const $GRADOS_H1 = document.querySelector("h1"),
    $HUMEDAD_H3 = document.querySelector("[data-rol='humedad']"),
    $HORA_H3 = document.querySelector('[data-rol="Hora"]'),
    $CIUDAD_H3 = document.querySelector("[data-rol='ciudad']"),
    $CALENDARIO_H3 = document.querySelector("[data-rol='calendario']");
  $CIUDAD_H3.textContent = name;
  $HUMEDAD_H3.textContent = humidity;
  $GRADOS_H1.textContent = Math.floor(temp - 273.15);
}
