function refreshWeather(response){
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
let cityElement = document.querySelector("#current-city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windSpeedElement = document.querySelector("#wind-speed"); 




cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);
descriptionElement.innerHTML = response.data.condition.description;

humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
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




/*function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
  let units = "imperial";
  let apiKey = "bca5e052413bdbcf0bf4oa7bbat0c995";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=bca5e052413bdbcf0bf4oa7bbat0c995&units=${units}`;
  axios.get(apiURL).then(showTemperature);
}

//New code for API
function showTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let currentTemperature = document.querySelector("#current-temperature-value");
  currentTemperature.innerHTML = `${response.data.temperature.current}`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#city-search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-details");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
*/