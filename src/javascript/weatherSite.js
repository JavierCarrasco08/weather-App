import { formHours } from "./formData.js";
import { ICONS } from "./weather_img_info.js";

function weatherSiteDay() {
  let map = new Map([
    ["shadow", "none"],
    ["text", "text"],
    ["bg", "text"],
  ]);
  let moodShadow;
  let moodText;
  let moodBg;
  return function (sunrise, sunset, time_24, timezone) {
    let hour = parseInt(time_24.split(":")[0]);
    let hourAtardecer = parseInt(formHours(sunset, timezone).split(":")[0]);
    let hourAmanecer = parseInt(formHours(sunrise, timezone).split(":")[0]);
    if (hour >= hourAtardecer || hour <= hourAmanecer) {
      ICONS.Clear = "./src/images/Icons/fases-de-la-luna.png";
      ICONS.Clouds = "./src/images/Icons/noche-nublada.png";
      moodShadow = "shadowSun";
      moodText = "textMoon";
      moodBg = "gradientSun";
    } else {
      ICONS.Clear = "./src/images/Icons/sol.png";
      ICONS.Clouds = "./src/images/Icons/nuboso.png";
      moodShadow = "shadowMoon";
      moodText = "textSun";
      moodBg = "gradientMoon";
    }
    console.log(map);
    map.set("shadow", moodShadow);
    map.set("text", moodText);
    map.set("bg", moodBg);
  };
}
export let mood = weatherSiteDay();

export function moodSite() {}
