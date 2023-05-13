// Weather Data model used to map the json response from api to a interface
export interface WeatherData {
  lat: string //latitude
  lon: string //longitude
  elevation: number //elevation
  timezone: string //timezone
  units: string // units
  current: Current // links to the current interface given below
}

export interface Current {
  icon: string
  icon_num: number
  summary: string // summary of  the report
  temperature: number // current temperature
  feels_like: number // weather feels like
  wind_chill: number // temperature due to wind
  dew_point: number // lowest temp
  wind: Wind // link to wind interface
  precipitation: Precipitation // link to precipitation interface
  cloud_cover: number // cloud cover
  ozone: number // ozone
  pressure: number //pressure
  uv_index: number //uv index
  humidity: number // humidity
  visibility: number // visibility
}

export interface Wind {
  speed: number // wind speed
  gusts: number // wind gusts
  angle: number // wind angle
  dir: string //wind direction
}

export interface Precipitation {
  total: number //precipitation report
  type: string
}