const forecastd = new Date();

const todayDayNumber = forecastd.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const forecastURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=f05cac25ec9fb51538ef2179a949be55&units=imperial"

fetch(forecastURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);
        let mylist = weatherInfo.list;

        let forecastDayNumber = todayDayNumber;
        console.log(forecastDayNumber);

        for (i = 0; i < mylist.length; i++) {

            let time = mylist[i].dt_txt;

            if (time.includes('18:00:00')) {

                forecastDayNumber += 1;
                if (forecastDayNumber === 7) {
                    forecastDayNumber = 0;
                }

                let theDayName = document.createElement("span");
                theDayName.textContent = weekday[forecastDayNumber];

                let theTemp = document.createElement("p");
                theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

                let iconcode = weatherInfo.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                let theIcon = document.createElement("img");
                theIcon.src = iconPath;

                let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);

                document.getElementById('fivedayforecast').appendChild(theDay);

            }
        }
    })