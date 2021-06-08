//ex-2---- this api will return Array of objects & we can access objet by index like characterData.quotes/episodes/deathes etc
fetch("https://www.breakingbadapi.com/api/")
  .then((response) => response.json())
  .then((characterData) => {
    console.log(characterData);
  });

//ex-3 weather app------
const search_button = document.getElementById("searchButton");
search_button.addEventListener("click", weatherBycity);
const location_button = document.getElementById("getLocation");
location_button.addEventListener("click", weatherBylocation);
function weatherBycity() {
  if (!document.getElementById("searchCity").value) {
    alert("Please enter City name");
    return false;
  }
  const search_city = document.getElementById("searchCity").value;
  key = "82b892157b6437857ba417dcafa072c1";
  url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    search_city +
    "&appid=" +
    key;
  getWeather(url);
}
function weatherBylocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Lat :", position.coords.latitude);
      console.log("Lon :", position.coords.longitude);
      key = "82b892157b6437857ba417dcafa072c1";
      url =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        position.coords.latitude +
        "&lon=" +
        position.coords.longitude +
        "&appid=" +
        key;
      console.log(url);
      getWeather(url);
    });
  } else {
    document.getElementById("weather_main").innerHTML =
      "Geolocation is not supported by this browser.";
  }
}
function getWeather(url) {
  fetch(url)
    .then(function (response) {
      if (response.status == 404) {
        document.getElementById("weather_main").innerHTML =
          "City not found. Please enter valid City name.";
        return false;
      }
      response.json().then(function (data) {
        console.log(data);
        //sunrise & sunset converter
        const date_sunrise = new Date(data.sys.sunrise * 1000);
        const date_sunset = new Date(data.sys.sunset * 1000);
        this.lon = data.coord.lon;
        this.lat = data.coord.lat;
        console.log(this.lon);
        console.log(this.lat);
        //wind direction converter
        let wind_direction;
        if (data.wind.deg > 0 && data.wind.deg <= 11.25) wind_direction = "N";
        else if (data.wind.deg > 348.75 && data.wind.deg <= 360)
          wind_direction = "N";
        else if (data.wind.deg > 11.25 && data.wind.deg <= 33.75)
          wind_direction = "NNE";
        else if (data.wind.deg > 33.75 && data.wind.deg <= 56.25)
          wind_direction = "NE";
        else if (data.wind.deg > 56.25 && data.wind.deg <= 78.75)
          wind_direction = "ENE";
        else if (data.wind.deg > 78.75 && data.wind.deg <= 101.25)
          wind_direction = "E";
        else if (data.wind.deg > 101.25 && data.wind.deg <= 123.75)
          wind_direction = "ESE";
        else if (data.wind.deg > 123.75 && data.wind.deg <= 146.25)
          wind_direction = "SE";
        else if (data.wind.deg > 146.25 && data.wind.deg <= 168.75)
          wind_direction = "SEE";
        else if (data.wind.deg > 168.75 && data.wind.deg <= 191.25)
          wind_direction = "S";
        else if (data.wind.deg > 191.25 && data.wind.deg <= 213.75)
          wind_direction = "SSW";
        else if (data.wind.deg > 213.75 && data.wind.deg <= 236.25)
          wind_direction = "SW";
        else if (data.wind.deg > 236.25 && data.wind.deg <= 258.75)
          wind_direction = "WSW";
        else if (data.wind.deg > 258.75 && data.wind.deg <= 281.25)
          wind_direction = "W";
        else if (data.wind.deg > 281.25 && data.wind.deg <= 303.75)
          wind_direction = "WNW";
        else if (data.wind.deg > 303.75 && data.wind.deg <= 326.25)
          wind_direction = "NW";
        else if (data.wind.deg > 326.25 && data.wind.deg <= 348.75)
          wind_direction = "NNW";
        document.getElementById("weather_main").innerHTML = "";
        //for icon
        document.getElementById("myImg").src =
          "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        document.getElementById("weather_data").innerText = data.name;
        //temprature
        document.getElementById("temp").innerHTML =
          Math.round(parseFloat(data.main.temp) - 273.15) + "&#8451;";
        document.getElementById("wind").innerHTML =
          data.wind.speed +
          " m/s " +
          "& Direction of wind :  " +
          wind_direction;
        document.getElementById("cloud").innerHTML =
          data.clouds.all + "% cloudy";
        document.getElementById("sunRise").innerHTML =
          "Sun-Rise: " + date_sunrise;
        document.getElementById("sunSet").innerHTML = "Sun-Set: " + date_sunset;
      });
    })
    .catch((error) =>
      // catch any errors
      console.error(error)
    );
}
