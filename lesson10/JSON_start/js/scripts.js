//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=02111&APPID=f05cac25ec9fb51538ef2179a949be55&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById("weather_icon").src = icon_path;
 }); //end of "then" fat arrow function


const d = new Date();

const todayDayNumber = d.getDay();
let forecastDayNumber = todayDayNumber;

console.log(forecastDayNumber);

for (i=0; i<mylist.length; i++){
  var time = mylist[i].dt_txt;
  if (time.includes('21:00:00')){
      let theDayName = document.createElement("span");
      theDayName.textContent = weekday[forecastDayNumber];
      console.log(">"+ weekday[forecastDayNumber]);
      }
  } 
  forecastDayNumber +=1;
      if (forecastDayNumber === 7){
        forecastDayNumber = 0;
}