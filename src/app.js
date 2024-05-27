

function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  descriptionElement.innerHTML = response.data.condition.description;

  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon"/>`;
}

function searchCity(city) {
  let apiKey = "bca5e052413bdbcf0bf4oa7bbat0c995";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather);
}

function changeCityData(event) {
  event.preventDefault();
  let searchInputName = document.querySelector("#search-city-input");
  let currentCityName = document.querySelector("#current-city");
  currentCityName.innerHTML = searchInputName.value;
  searchCity(searchInputName.value);
}
let citySearchForm = document.querySelector("#city-search-form");
citySearchForm.addEventListener("submit", changeCityData);

searchCity("Chicago");

/*function displayForecast() {

  let forecastDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  let forecastHtml = "";

  forecastDays.forEach(function(forecastCalendarDay) {
    forecastHtml = forecastHtml +
      `<div class="weather-day">${forecastCalendarDay}</div>
            </div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
              alt=""
              width="36"
            />
          </div>
          <div class="forecast-temperature">
            <span class="max-temperature">18&deg;</span>
            <span class="min-temperature">12&deg;</span>
          </div>`;
  });
  let forecastElement = document.querySelector("#forecast");

  forecastElement.innerHTML = forecastHtml;
}

displayForecast();*/


let currentTime = new Date();

let hours = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];
let hour = hours[currentTime.getHours()];
let minute = currentTime.getMinutes();

let currentDayInfo = document.querySelector(".current-details");
currentDayInfo.innerHTML = `<p>${day} ${hour}:${minute}, ${descriptionElement} <br />
Humidity: <strong>${humidityElement}%</strong>, Wind: <strong>7.2km/h</strong></p>`;
