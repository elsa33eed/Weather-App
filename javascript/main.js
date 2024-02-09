const keyApi = "60a91ad41487486d0ee4fb36092830c7";
const urlApi =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city = "cairo") {
  const res = await fetch(urlApi + city + `&appid=${keyApi}`);
  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    var data = await res.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.floor(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./Images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./Images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./Images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./Images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./Images/mist.png";
    }
    document.querySelector(".error").style.display = "none";
  }
}
function handleClick() {
  checkWeather(searchBox.value);
}
