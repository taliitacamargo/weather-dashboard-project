    var searchResultList = $("list-items");
    var searchResultArray = new Array;
    var searchEl = document.querySelector("#input-field");
    var lastCity; 
    var lastState;
    var maxArray;
    var apiKey = "7f59f6fb48c2adc5a5ee0d046a826198";


    // var mainURL = "https://api.openweathermap.org/data/2.5/onecall?lat=+latitude+&lon=+ longitude + "&units=imperial" + "&appid=" + apiKey;
    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +cityNameD + "&appid=" +apiKey + "&units=imperial";
    // var latitude;
    // var longitude;


    // TODO: Create Weather call function with Lat and Lon from Coords
    //      - Execute render functions here
    //      - Assign variables to fetch Promise 

    // TODO: Create Render Functions using the CreateElement method or changing text.value


    function coordsCall (cityName) {
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" +apiKey + "&units=imperial";
        console.log(cityName);
        fetch (queryURL) 
        .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            //   TODO: Take data from Weather promise and assign to variables
            //   TODO: Call Weather function here 
          });
    }

   
 



    function formSubmitHandler (event){
        event.preventDefault();
        var cityNameD = searchEl.value;
        console.log(cityNameD);
        coordsCall(cityNameD);
    }

        $("#submit-button").on('click', formSubmitHandler) 

        // console.log(cityNameD);














// $(document).ready(function () {
//     var searchResultList = $("list-items");
//     var searchResultArray = new Array;
//     var cityNameD;
//     var stateNameD; 
//     var lastURL;
//     var lastCity; 
//     var lastState;
//     var maxArray;
//     var apiKey = "7f59f6fb48c2adc5a5ee0d046a826198";
    


//     // philadelphia   [39.9523, -75.1638]
//     if (localStorage.length === 0 ) {
//         var mainURL = "https://api.openweathermap.org/data/2.5/onecall?lat=39.9523&lon=-75.1638&lon=-75.1638" + "&units=imperial" + "&appid=" + apiKey;

//         searchWeather (mainURL, "Philadelphia " , "PA")
//     }
//     else 
//     if(localStorage.length > 0) {
//         for (i = 0 ; i < localStorage.length; i++) {

//             searchResultArray.push(JSON.parse(localStorage.getItem(i)));

//             getSearchList(i, searchResultArray[i].city,searchResultList[i].state);
//         }

//         maxArray = searchResultArray.length-1;
//         lastURL = searchResultArray[maxArray].apiURL;
//         lastCity = searchResultArray[maxArray].city;
//         lastState = searchResultArray[maxArray].state;
//         searchWeather( lastURL, lastCity, lastState);

//     }

//     // event Listener

//     $("#submit-button").on('click', function (){
//         var cityNameD = $("#input-field").val();

//         var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +cityNameD + "&appid=" +apiKey + "&units=imperial";
       
       
//         var hereApiKey = "qpHYDNdy4b6pWgYTi5tlJWaXJZdmM26lC9ztXJafyM";
//         var hereURL = "https://geocode.search.hereapi.com/v1/geocode?q=" + cityNameD + "&apiKey=" + hereApiKey;
//         var latitudeHere;
//         var longitudeHere;

//         var latitude;
//         var longitude;

//         $.ajax ({
//             url: hereURL,
//             method: "GET"

//         }).then(function(response){
//             latitude = response.items[0].position.latitude;
//             longitude = repsonse.items[0].position.long;
//             cityNameD = response.items[0].address.city;
//             stateName = response.items[0].address.stateCode;
//             var queryURL =  "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon="  + longitude + "&exclude=alerts&units=imperial" + "&appid=" + apiKey;
//             var stringList = {"city" : cityNameD, "state" : stateNameD, "apiURL" : queryURL};
//             var localStorageitems = localStorage.length;
//             // sets into local storage / stringfy it

//             localStorage.setItem(localStorageitems,JSON.stringify(stringList));
//             searchResultArray.push(stringList);
//             searchWeather(queryURL,cityNameD,stateNameD);
//             getSearchList (localStorageitems, cityNameD, stateDisplayName);

//         })
//     });

//     function getSearchList (i, city, state) {
//         var cityStateD = city + "," + state;
//         var itemsList = $("<li>");
//         itemsList. addClass ("list-group-item list-group-item-action");
//         itemsList.attr("data-index" , i);
//         itemsList.attr("data-toggle", "list");
//         itemsList.attr("role", "tab");
//         itemsList.text(cityStateD);
        
//         searchresultsList.append(itemsList);

//     }
    

// });

// function searchWeather (URL,city,state) {
//     $.ajax ({
//         url: URL,
//         method: "GET"
//     }).then (function(response){
//         var cityStateD = city + "," + state;
//         var imge = response.current.weather[0].icon;
//         var wind = response.current.wind_speed;
//         var temp = response.current.temp;
//         var tempFeel = response.current.feels_like;
//         var humidity = response.current.humidity;
//         var uvIndex = response.current.uvi;
//         var uvIDClass;
//         var imgEl = $("<img>");
//         // var pEl = $("<p>");
//         var iconURL = "https://api.openweathermap.org/img/wn/" + imge +".png";

//         $("#input-field").val("");
//         if (uvIndex <= 3) {uvIdClass = "bg-success";}
//         else if (uvIndex >= 4 && uvIndex <=6) {uvIDClass = "bg-warning"}
//         else if (uvIndex >= 7 && uvIndex <=8) {uvIDClass = "bg-orange"}
//         else (uvIDClass = "bg-danger");

//         imgEl.attr("src", iconURL);

//         $("#forecast-title").empty();
//         $("#forecast-title").text(cityStateD + "( " + moment().format('l')+")");
//         $("#forecast-info").empty();
//         $("#forecast-info").append("<p>" + "Temperature: " + temp + "&deg; &#8457");
//         $("#forecast-info").append("<p>" + "Feels Like:" + tempFeel + "&deg; &#8457");
//         $("#forecast-info").append("<p>" + "Humidity:" + humidity + "&percnt;");
//         $("#forecast-info").append("<p>" + "Feels Likee:" + wind + "mph");
//         $("#forecast-info").append("<p>" + "Feels Likee:" + "<span class='" + uvIDClass + "text-white'>" + uvIndex);

//         for (i = 0 ; i < 5 ; i++) {
//             var dailyUnit = response.daily[i].dt;
//             var currentDay = timeConverter(dailyUnit);
//             var currentIMG = "https://api.openweathermap.org/img/wn/" + response.daily[i].weather[0].imge+".png";
//             var currentTemp = response.daily[i].temp.day+"&deg;" + "&#8457";
//             var currentHumidity = response.daily.humidity + "&percnt;";
//             var containerId = "#card-" +i;
//             var forecastCard = $(containerId);
//             var forecastCardImg = $("<img>");
//             var forecastCardTxt = $(".text-" + i)

//             forecastCard.empty();
//             forecastCardImg.attr("Src" , currentIMG);
//             forecastCard.append("<h5>" + currentDay);
//             forecastCard.append("<p>" + "Temp:" + currentTemp);
//             forecastCard.append("<p>" + "Humidity:" + currentHumidity);

//         }
        
//     })
//     function timeConvert(UNIX_timestamp) {
//         var a = new Date (UNIX_timestamp *1000);
//         var year = a.getFullYear();
//         var month= a.getMonth();
//         var date = a.getDate();
//         var time = month + "/" + date + "/" + year
//         return time;

//     }
// }