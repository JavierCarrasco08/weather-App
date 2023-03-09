import sun from "./../images/Icons/sol.png";
import cloud from "./../images/Icons/nuboso.png";
import thunder from "./../images/Icons/tormenta.png";
import rain from "./../images/Icons/lluvia.png";
import snow from "./../images/Icons/copo-de-nieve.png";
import drizzle from "./../images/Icons/lluvioso.png";
import neblina from "./../images/Icons/neblinoso.png";
import none from "./../images/Icons/error.png";

export const ICONS = {
  Thunderstorm: thunder,
  Drizzle: drizzle,
  Rain: rain,
  Snow: snow,
  Clear: sun,
  Clouds: cloud,
  None: none,
  Atmosphere: neblina,
};

export const BG_MAIN = {
  Thunderstorm: "bg-rain",
  Drizzle: "bg-rain",
  Rain: "bg-rain",
  Clear: "bg-clear",
  Clouds: "bg-cloud",
  Snow: "bg-snow",
  Atmosphere: "bg-neblina",
};
