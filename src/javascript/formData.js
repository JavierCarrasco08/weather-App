export function formHours(data, hour) {
  let myDate = new Date((hour + data) * 1000);
  let hours = myDate.getUTCHours();
  let minutes =
    myDate.getUTCSeconds() >= 30
      ? myDate.getUTCMinutes() + 1
      : myDate.getUTCMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes}`;
}
