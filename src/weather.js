function displayCurrentTemp(response) {
  let currentTempValue = document.querySelector("#current-temp-value");
  let currentTemp = Math.round(response.data.temperature.current);
  let cityInputElement = document.querySelector("#current-city");

  cityInputElement.innerHTML = response.data.city;
  currentTempValue.innerHTML = currentTemp;
}

function enterCityChange(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = cityInput.value;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = city;

  let apiKey = "4e2df5aotaa983694533f2b4440ef095";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayCurrentTemp);
}

function formatDate(now) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let minutes = now.getMinutes();
  let hours = now.getHours();
  let day = now.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let currentFormatDay = days[day];
  return `${currentFormatDay} ${hours}:${minutes}`;
}
let cityChangeForm = document.querySelector("#city-change-form");
cityChangeForm.addEventListener("submit", enterCityChange);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
