import { formHours } from "./formData.js";
import { BG_MAIN, ICONS } from "./weather_img_info.js";

function weatherSiteDay() {
  let map = new Map([
    ["shadow", "shadow-shadowP"],
    ["text", "text-text"],
    ["bg", "bg-gradient"],
    ["fill", "fill-text"],
    ["main", "bg-text"],
  ]);
  let moodShadow;
  let moodText;
  let moodBg;
  let fill;
  return function (sunrise, sunset, time_24, timezone, { main }) {
    let hour = parseInt(time_24.split(":")[0]);
    let hourAtardecer = parseInt(formHours(sunset, timezone).split(":")[0]);
    let hourAmanecer = parseInt(formHours(sunrise, timezone).split(":")[0]);
    if (hour >= hourAtardecer || hour <= hourAmanecer) {
      ICONS.Clear = "./src/images/Icons/fases-de-la-luna.png";
      ICONS.Clouds = "./src/images/Icons/noche-nublada.png";
      BG_MAIN.Clear = "bg-moon";
      BG_MAIN.Clouds = "bg-moon";
      moodShadow = "shadow-shadowSun";
      moodText = "text-textMoon";
      moodBg = "bg-gradientSun";
      fill = "fill-textMoon";
    } else {
      BG_MAIN.Clear = "bg-sun";
      BG_MAIN.Clouds = "bg-cloud";
      ICONS.Clear = "./src/images/Icons/sol.png";
      ICONS.Clouds = "./src/images/Icons/nuboso.png";
      moodShadow = "shadow-shadowMoon";
      moodText = "text-textSun";
      moodBg = "bg-gradientMoon";
      fill = "fill-textSun";
    }
    const $MAIN = document.querySelector("main");
    const $FOOTER = document.getElementById("footer");
    const $HEADER_SECTION = document.querySelector("[data-rol='information']");
    const $FORM_CHILDREN = Array.from(document.forms[0].children);
    const $CONTENT_BUTTON = Array.from(document.querySelectorAll("svg"));
    $CONTENT_BUTTON.forEach((e) => e.classList.replace(map.get("fill"), fill));
    $FORM_CHILDREN.forEach((e) => {
      e.classList.replace(map.get("text"), moodText);
      e.classList.replace(map.get("bg"), moodBg);
    });
    $HEADER_SECTION.classList.replace(map.get("shadow"), moodShadow);
    $HEADER_SECTION.classList.replace(map.get("bg"), moodBg);
    $FOOTER.classList.replace(map.get("bg"), moodBg);
    $MAIN.classList.replace(map.get("text"), moodText);
    $MAIN.classList.replace(map.get("main"), BG_MAIN[main]);
    map.set("shadow", moodShadow);
    map.set("text", moodText);
    map.set("bg", moodBg);
    map.set("main", BG_MAIN[main]);
    map.set("fill", fill);
  };
}
export let mood = weatherSiteDay();
