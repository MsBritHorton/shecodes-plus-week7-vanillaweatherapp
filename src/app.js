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
currentDayInfo.innerHTML = `<p>${day} ${hour}:${minute}, moderate rain <br />
Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong></p>`;

// Feature 2
//Add a search engine: a search bar with a button.
//When searching for a city (i.e. Paris), display the city
//name on the page after the user submits the form.

function changeCityData(event) {
  event.preventDefault();
  let searchInputName = document.querySelector("#search-city-input");
  let currentCityName = document.querySelector("#current-city");
  currentCityName.innerHTML = searchInputName.value;
}
let citySearchForm = document.querySelector("#city-search-form");
citySearchForm.addEventListener("input", changeCityData);
