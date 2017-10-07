$(document).ready(function(){
  $("#submitcity").click(function(){
    return getWeather();
  });
});

function getWeather(){
  var city=$("#city").val();

  if(city!='')
  {
    $.ajax({
      url:'http://api.openweathermap.org/data/2.5/weather?q=London'+city+"&units=metric"+"&APPID=dbec9435b74b155636f3b181a5579eab",
      type: "GET",
      datatype: "jsonp",
      success: function(data){
        var widget=showresults(data)
        $("#showweather").html(widget);
        $("#city").val('');
      }
    });
  }
  else {
    $("#error").html("<div class='alert alert-danger' id='errorcity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>city field cannot be empty</div>");
  }
}

function showresults(data){
  return '<h3 style="text-align:center;">Current Weather for '+data.name+' , '+data.sys.country+'</h3>'+
  "<P style='padding-left:20px;'>Temperature: "+data.main.temp+"&deg;C</P>"+
  "<P style='padding-left:20px;'>Pressure: "+data.main.pressure+" hpa</p>"+
  "<P style='padding-left:20px;'>Humidity: "+data.main.humidity+"%</p>"+
  "<P style='padding-left:20px;'>Max Temperature: "+data.main.temp_max+"&deg;C</p>"+
  "<P style='padding-left:20px;'>Min Temperature: "+data.main.temp_min+"&deg;C</p>"+
  "<P style='padding-left:20px;'>Weather: "+data.weather[0].main+"</p>"+
  "<P style='padding-left:20px;'>Weather description: "+"<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>"+data.weather[0].description+"</p>"+
  "<P style='padding-left:20px;'>Wind Speed: "+data.wind.speed+
  "<P style='padding-left:20px;'>Wind Direction: "+data.wind.deg;
  //"<P style='padding-left:20px;'>Temperature: "+data.main.temp+"&deg;C</p>";
}
