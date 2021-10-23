$(document).ready(function () {
    var searchResultList = $("list-items");
    var searchResultArray = new Array;
    var cityNameD;
    var stateNameD; 
    var lastURL;
    var lastCity; 
    var lastState;
    var maxArray;
    var apiKey = "7f59f6fb48c2adc5a5ee0d046a826198";
    


    // philadelphia   [39.9523, -75.1638]
    if (localStorage.length === 0 ) {
        var mainURL = "https://api.openweathermap.org/data/2.5/onecall?lat=39.9523&lon=-75.1638&lon=-75.1638" + "&units=imperial" + "&appid=" + apiKey;

        searchWeather (mainURL, "Philadelphia " , "PA")
    }
    else 
    if(localStorage.length > 0) {
        for (i = 0 ; i < localStorage.length; i++) {

            searchResultArray.push(JSON.parse(localStorage.getItem(i)));

            getSearchList(i, searchResultArray[i].city,searchResultList[i].state);
        }

        maxArray = searchResultArray.length-1;
        lastURL = searchResultArray[maxArray].apiURL;
        lastCity = searchResultArray[maxArray].city;
        lastState = searchResultArray[maxArray].state;
        searchWeather( lastURL, lastCity, lastState);

    }

    // event Listener

    $("#submit-button").on('click', function (){
        var cityNameD = $("#input-field").val();
        var hereApiKey = "qpHYDNdy4b6pWgYTi5tlJWaXJZdmM26lC9ztXJafyM";
        var hereURL = "https://geocode.search.hereapi.com/v1/geocode?q=" + cityNameD + "&apiKey=" + hereApiKey;
        var latitude;
        var longitude;

        $ajax ({
            url: hereURL,
            method: "GET"

        }).then(function(response){
            latitude = response.items[0].position.latitude;
            longitude = repsonse.items[0].position.long;
            cityNameD = response.items[0].address.city;
            stateName = response.items[0].address.stateCode;
            var queryURL =  "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon="  + longitude + "&exclude=alerts&units=imperial" + "&appid=" + apiKey;
            var stringList = {"city" : cityNameD, "state" : stateNameD, "apiURL" : queryURL};
            var localStorageitems = localStorage.length;
            // sets into local storage / stringfy it

            localStorage.setItem(localStorageitems,JSON.stringify(stringList));
            searchResultArray.push(stringList);
            searchWeather(queryURL,cityNameD,stateNameD);
            getSearchList (localStorageitems, cityNameD, stateDisplayName);

        })
    });

    function getSearchList (i, city, state) {
        var cityStateD = city + "," + state;
        var itemsList = $("<li>");
        itemsList. addClass ("list-group-item list-group-item-action");
        itemsList.attr("data-index" , i);
        itemsList.attr("data-toggle", "list");
        itemsList.attr("role", "tab");
        itemsList.text(cityStateD);
        
        searchresultsList.append(itemsList);

    }
    

});

function runWeatherSearch (URL,city,state) {
    $.ajax ({
        method: "GET"

    }).then (function(response){
        var cityStateD = city + "," + state;
        var img = response.current.weather[0].icon;
        var wind = response.current.wind_speed;
        var temp = response.current.temp;
        var tempFeel = response.current.feels_like;
        var humidity = response.current.humidity;
        var uvIndex = response.current.uvi;
        var uvIDClass;
        var imgEl = $("<img>");
        var pEL = $("<p>");
        var iconURL = "https://api.openweathermap.org/img/wn/" + img +".png";
        
    })
}