import { formHours } from "./formData.js";
import { ICONS } from "./weather_img_info.js";

export function weatherSite(sunrise, sunset, time_24, timezone) {
  let hour = parseInt(time_24.split(":")[0]);
  let hourAtardecer = parseInt(formHours(sunset, timezone).split(":")[0]);
  let hourAmanecer = parseInt(formHours(sunrise, timezone).split(":")[0]);
  if (hour >= hourAtardecer || hour <= hourAmanecer) {
    ICONS.Clear = "./src/images/Icons/fases-de-la-luna.png";
    ICONS.Clouds = "./src/images/Icons/noche-nublada.png";
  } else {
    ICONS.Clear = "./src/images/Icons/sol.png";
    ICONS.Clouds = "./src/images/Icons/nuboso.png";
  }
  let moodMoon = {};
}
