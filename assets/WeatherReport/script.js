var APIKey = "bbda06d34b1585cdae406d73ae167e39"
var locations = []

function getCityInfo(place){
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q="+place+"&units=Imperial&APPID="+APIKey,
    method: "GET"
}).then(function(result){
    $(".report").text(place+ " "+ moment().format('MMMM Do YYYY'))
    var image = $("<img>")
    $(image).attr("src", "http://openweathermap.org/img/wn/"+result.weather[0].icon+".png")
    $(".report").append(image)
    var temp = $("<p>")
    var humidity = $("<p>")
    var wind = $("<p>")
    var uvIndex = $("<p>")

    //TODO: Get UV
    $(temp).text("Temperature: "+result.main.temp)
    $(humidity).text("Humidity: "+result.main.humidity)
    $(wind).text("Wind Speed: "+result.wind.speed)
    $(".report").append(temp)
    $(".report").append(humidity)
    $(".report").append(wind)

    var previousSearch = $("#"+place)
        if(previousSearch.length === 0){
            var cityBtn = $("<button>")
            $(cityBtn).text(place)
            $(cityBtn).attr("class","btn btn-outline-secondary btn-block prevCities") 
            $(cityBtn).attr("id", place)
            $(cityBtn).on("click", function(){
                console.log("Hello")
                        getCityInfo($(this).text())
                
                })
            var row = $("<div>")
            row.attr("class", "row")
            $(row).append(cityBtn)
            $("#searchContainer").append(row)

            $("button").attr("last", "true").removeAttr("last")
            $(cityBtn).attr("last", "true")

        }
    locations.push(place)

    localStorage.setItem("pastSearch", JSON.stringify(locations))
})


$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast/?q="+place+"&units=Imperial&APPID="+APIKey,
    method: "GET"
}).then(function(result){
    var hour = moment().hour()
    hour = Math.floor(hour/3)
    
    for(var i = 0; i < 5; i++){
        var box = $("[data="+i+"]")
        $(box).text(result.list[i*8+hour].dt_txt)
        var image = $("<img>")
        $(image).attr("src", "http://openweathermap.org/img/wn/"+result.list[i*8+hour].weather[0].icon+".png")
        $(box).append(image)

        var temp = $("<p>")
        var humidity = $("<p>")
        $(temp).text("Temperature: "+result.list[i*8+hour].main.temp)
        $(humidity).text("Humidity: "+result.list[i*8+hour].main.humidity)
        $(box).append(temp)
        $(box).append(humidity)
    }
})
}

function restoreHistory(){
    var list = JSON.parse(localStorage.getItem("pastSearch"))

    $(list).each(function(index, place){
        var cityBtn = $("<button>")
            $(cityBtn).text(place)
            $(cityBtn).attr("class","btn btn-outline-secondary btn-block prevCities") 
            $(cityBtn).attr("id", place)
            $(cityBtn).on("click", function(){
                console.log("Hello")
                        getCityInfo($(this).text())
                
                })
            var row = $("<div>")
            row.attr("class", "row")
            $(row).append(cityBtn)
            $("#searchContainer").append(row)
        })
    getCityInfo($("button").attr("last","true"))
}
restoreHistory()
$(".btn-success").on("click", function(){
    var place = $("#search").val()
    if(place.trim()){
        getCityInfo(place)
    }

})
