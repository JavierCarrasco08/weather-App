const API_KEY = import.meta.env.VITE_API_KEY;
export async function apiGeocoder(name) {
  let res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${API_KEY}`
    ),
    json = await res.json();
  return json.length === 0
    ? [
        {
          main: { humidity: 0, temp: 273.15 },
          weather: [{ main: "None" }],
          timezone: 0,
          sys: { sunset: 10000000, sunrise: 1000000000, country: "?" },
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
    if (!res.ok)
      throw {
        list: [
          {
            weather: [{ main: "None", description: "Location Not Found" }],
            dt_txt: "2000/30/50",
            main: { temp: 273, humidity: 0 },
            clouds: { all: 100 },
            wind: { speed: 300 },
          },
        ],
      };
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
    if (!res.ok) throw { date: "1/13/2040", time_24: "25:30:17" };
    return json;
  } catch (error) {
    return error;
  }
}
