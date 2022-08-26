const WEATHER_API_KEY = "8ded9a05ad7354cb4335343102c1c5fe";

function onGeoSuccess(postion){
  const lat = postion.coords.latitude;
  const lon = postion.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

  fetch(url).then((response)=>response.json()).then((data) =>{
    const weatherTag = document.querySelector(".weather span:first-child");
    const city = document.querySelector(".weather span:last-child");

    weatherTag.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    city.innerText = `${data.name}`;
  })
}

function onGeoError(){
  alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);