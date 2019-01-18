var xhr = new XMLHttpRequest();

// Forme générale du lien :
// http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?
// date=1527811200&opacity=0.9&fill_bound=true&appid={api_key}

var base_url = "http://api.openweathermap.org/data/2.5/weather";
var base_url_5days = "http://api.openweathermap.org/data/2.5/forecast";

//var city = document.getElementById("ville").value;
var appid = "3c084bd74c2f77f02d6d6c30c2018bf0";
var units = "metric";


function get_url() {
    return base_url + "?"
        + "q=" + city + "&"
        + "units=" + units + "&"
        + "appid=" + appid;
}

function get_url_5days() {
    return base_url_5days + "?"
        + "q=" + city + "&"
        + "units=" + units + "&"
        + "appid=" + appid;
}


/*
function init_page() {
    city = document.getElementById("ville").value;

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();

            var response = JSON.parse(this.responseText);
            var temperature = response.main.temp;

            var icon = response.weather[0].icon;
            var src = "http://openweathermap.org/img/w/" + icon + ".png";

            document.getElementById("meteo_actuelle").innerHTML = "Température actuelle : " + temperature;
            document.getElementById("icon").src = src;

        }
    };
    
    xhr.open("GET", get_url(), true)
    xhr.send()
}*/

function get_temperature() {
    city = document.getElementById("ville").value;

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            // if (document.getElementById("url_visibility").checked) {
            //     document.getElementById("url").style.display = "block";
            // }
            // else{
            //     document.getElementById("url").style.display = "none";
            // }

            var response = JSON.parse(this.responseText);
            var temperature = response.main.temp;

            var icon = response.weather[0].icon;
            var src = "http://openweathermap.org/img/w/" + icon + ".png";

            document.getElementById("meteo").innerHTML = "Température actuelle : " + temperature;
            document.getElementById("icon").src = src;

        }
    };

    xhr.open("GET", get_url(), true)
    xhr.send()
}

function get_temperature_5days() {
    city = document.getElementById("ville").value;

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            // if (document.getElementById("url_visibility").checked) {
            //     document.getElementById("url_5days").style.display = "block";
            // }
            // else {
            //     document.getElementById("url_5days").style.display = "none";
            // }


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


            document.getElementById("meteo_5days_0").innerHTML = "Température du jour : " + temperature_5days_0;
            document.getElementById("meteo_5days_1").innerHTML = "j+1 : " + temperature_5days_1;
            document.getElementById("meteo_5days_2").innerHTML = "j+2 : " + temperature_5days_2;
            document.getElementById("meteo_5days_3").innerHTML = "j+3 : " + temperature_5days_3;
            document.getElementById("meteo_5days_4").innerHTML = "j+4 : " + temperature_5days_4;


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
