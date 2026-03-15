// const URL = "http://api.weatherapi.com/v1/current.json?key=";

const API_KEY = "b9e35210557a477bb97132005260903";

const URL = "http://api.weatherapi.com/v1/current.json?key="+API_KEY+"&q=Mumbai&aqi=yes";

const p = document.getElementById("temp");

const getWeather = async ()=>{

    let data = await fetch(URL);

    let weather = await data.json();

    console.log(weather.current.temp_c);   

    p.innerText = `${weather.current.temp_c}`

}

