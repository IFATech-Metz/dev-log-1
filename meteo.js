var xhr = new XMLHttpRequest();

// Forme générale du lien :
// http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?
// date=1527811200&opacity=0.9&fill_bound=true&appid={api_key}

var base_url = "http://api.openweathermap.org/data/2.5/weather";
var city = "Metz";
var units = "metric";
var appid = "3c084bd74c2f77f02d6d6c30c2018bf0";

var current_date = new Date();

var year = current_date.getFullYear();
var month = current_date.getMonth() + 1;
var day = current_date.getDate();
var hour = current_date.getHours();
var minute = current_date.getMinutes();

var day_now = day + "/" + month + "/" + year;
var hour_now = hour + "h" + minute;



function get_url() {
    return base_url + "?"
        + "q=" + city + "&"
        + "units=" + units + "&"
        + "appid=" + appid;
}

function init_page() {
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("url").innerHTML = get_url();


            document.getElementById("date_now").innerHTML = "Date : " + day_now;
            document.getElementById("hour_now").innerHTML = "Heure : " + hour_now;

            var response = JSON.parse(this.responseText);
            var temperature = response.main.temp;
            var icon = response.weather[0].icon;
            var src = "http://openweathermap.org/img/w/" + icon + ".png";

            document.getElementById("meteo").innerHTML = "Température à " + city + " : " + temperature + "°C";
            document.getElementById("icon").src = src;

        }
    };

    xhr.open("GET", get_url(), true)
    xhr.send()
}

var base_url_5days = "http://api.openweathermap.org/data/2.5/forecast";

function get_url_5days() {
    return base_url_5days + "?"
        + "q=" + city + "&"
        + "units=" + units + "&"
        + "appid=" + appid;
}

function get_temperature_5days() {
    city = document.getElementById("ville").value;

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            //document.getElementById("url_5days").innerHTML = get_url_5days();


            var response_5days = JSON.parse(this.responseText);
            var temperature_5days_0 = response_5days.list[0].main.temp;
            var temperature_5days_1 = response_5days.list[8].main.temp;
            var temperature_5days_2 = response_5days.list[16].main.temp;
            var temperature_5days_3 = response_5days.list[24].main.temp;
            var temperature_5days_4 = response_5days.list[32].main.temp;
            var temperature_5days_4 = response_5days.list[39].main.temp;


            var icon_0 = response_5days.list[0].weather[0].icon;
            var src_0 = "http://openweathermap.org/img/w/" + icon_0 + ".png";
            var icon_1 = response_5days.list[8].weather[0].icon;
            var src_1 = "http://openweathermap.org/img/w/" + icon_1 + ".png";
            var icon_2 = response_5days.list[16].weather[0].icon;
            var src_2 = "http://openweathermap.org/img/w/" + icon_2 + ".png";
            var icon_3 = response_5days.list[24].weather[0].icon;
            var src_3 = "http://openweathermap.org/img/w/" + icon_3 + ".png";
            var icon_4 = response_5days.list[32].weather[0].icon;
            var src_4 = "http://openweathermap.org/img/w/" + icon_4 + ".png";

            document.getElementById("meteo_5days").innerHTML = "<hr>Aujourd'hui à " + city + " : <br><br>";
            document.getElementById("meteo_5days_0").innerHTML = temperature_5days_0 + "°C";
            document.getElementById("meteo_5days_prev").innerHTML = "<hr>Prévisions des prochains jours : <br><br>";
            document.getElementById("meteo_5days_1").innerHTML = "Demain : " + temperature_5days_1 + "°C";
            document.getElementById("meteo_5days_2").innerHTML = "Le " + (day + 2) + "/" + month + " : "+ temperature_5days_2 + "°C";
            document.getElementById("meteo_5days_3").innerHTML = "Le " + (day + 3) + "/" + month + " : "+ temperature_5days_3 + "°C";
            document.getElementById("meteo_5days_4").innerHTML = "Le " + (day + 4) + "/" + month + " : "+ temperature_5days_4 + "°C";


            document.getElementById("icon_0").src = src_0;
            document.getElementById("icon_1").src = src_1;
            document.getElementById("icon_2").src = src_2;
            document.getElementById("icon_3").src = src_3;
            document.getElementById("icon_4").src = src_4;

        }
    };

    xhr.open("GET", get_url_5days(), true)
    xhr.send()
}