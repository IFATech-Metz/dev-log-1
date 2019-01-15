var xhr = new XMLHttpRequest();

// Forme générale du lien :
// http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?
// date=1527811200&opacity=0.9&fill_bound=true&appid={api_key}

var base_url = "http://api.openweathermap.org/data/2.5/weather";
var city = "Metz";
var units = "metric";
var appid = "3c084bd74c2f77f02d6d6c30c2018bf0";

function get_url() {
    return base_url + "?"
        + "q=" + city + "&"
        + "units=" + units + "&"
        + "appid=" + appid;
}

function init_page() {
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();

            var response = JSON.parse(this.responseText);
            var temparature = response.main.temp;
            var icon = response.weather[0].icon;
            var src = "http://openweathermap.org/img/w/" + icon + ".png";
            document.getElementById("meteo").innerHTML = temparature;
            document.getElementById("icon").src = src;
        }
    };

    xhr.open("GET", get_url(), true)
    xhr.send()
}

function get_temperature() {
    city = document.getElementById("ville").value;
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();

            if(document.getElementById("url_visibility").checked){
                document.getElementById("url").style.display ="block";
            }
            else{
                document.getElementById("url").style.display = "none";
            }

            var response = JSON.parse(this.responseText);
            var temparature = response.main.temp;
            document.getElementById("meteo").innerHTML = temparature;
        }
    };

    xhr.open("GET", get_url(), true)
    xhr.send()
}
