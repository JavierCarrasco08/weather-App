const API_KEY = import.meta.env.VITE_API_KEY;
export async function apiGeocoder(name) {
  let res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${API_KEY}`
    ),
    json = await res.json();
  return json.length === 0
    ? [
        {
          name: "Location not found",
          main: { humidity: 0, temp: 273.15 },
          weather: [{ main: "None" }],
          timezone: 0,
        },
      ]
    : json;
}

export async function apiWeather(obj) {
  try {
    let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${obj.lat}&lon=${obj.lon}&appid=${API_KEY}`
      ),
      json = await res.json();
    if (!res.ok) throw obj;
    return json;
  } catch (error) {
    return error;
  }
}

export async function apiForecast(obj) {
  try {
    let res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${obj.lat}&lon=${obj.lon}&appid=${API_KEY}`
      ),
      json = await res.json();
    if (!res.ok) throw obj;
    return json;
  } catch (error) {
    return error;
  }
}

export async function apiTimeZone(obj) {
  const API_KEY_GEO = import.meta.env.VITE_API_KEY_GEO;
  try {
    let res = await fetch(
        `https://api.ipgeolocation.io/timezone?apiKey=${API_KEY_GEO}&lat=${obj.lat}&long=${obj.lon}`
      ),
      json = await res.json();
    if (!res.ok) throw obj;
    return json;
  } catch (error) {
    return error;
  }
}
