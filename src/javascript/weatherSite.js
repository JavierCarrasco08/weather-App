export function weatherSite() {
  let hour = parseInt(time_24.split(":")[0]);
  let hourAtardecer = parseInt(formHours(sunset, timezone).split(":")[0]);
  let hourAmanecer = parseInt(formHours(sunrise, timezone).split(":")[0]);
  if (hour >= hourAtardecer || hour <= hourAmanecer) {
    console.log("Si");
    ICONS.Clear = "./src/images/Icons/fases-de-la-luna.png";
    ICONS.Clouds = "./src/images/Icons/noche-nublada.png";
    $CONTAINER.classList.replace("bg-sun", "bg-moon");
    $CONTAINER.classList.replace("text-textSun", "text-textMoon");
  } else {
    console.log("NO");
    ICONS.Clear = "./src/images/Icons/sol.png";
    ICONS.Clouds = "./src/images/Icons/nuboso.png";
    $CONTAINER.classList.replace("bg-moon", "bg-sun");
    $CONTAINER.classList.replace("text-textMoon", "text-textSun");
  }
}
