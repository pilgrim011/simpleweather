$(document).ready(function(){
  var toggleC = true;
  var tempC;
  var tempF;
  var locate = prompt("Your city?");

var dodaj = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?q=" + locate + "&units=metric&APPID=02a3afb571841bf9ae4d3f377e67082d&callback=?";

$.getJSON(dodaj,function(response) {
  var temperature = response.main.temp;
  tempC = Math.round(temperature);
  tempF = Math.round(tempC*1.8+32);
  
$("#city").html(response.name + ", " + response.sys.country);
  $("#info").html(response.main.temp);
  $(".btn").html("°C"); $("#cond").html(response.weather[0].main);
 var icon = $("img").html("<img src=http://openweathermap.org/img/w/" + response.weather[0].icon + ".png " + "class=img-fluid alt=Oops" + ">");
  console.log(icon);
  return icon;
  });
 $(".btn").click(function(){
  if(toggleC == true){
    toggleC = false;
    $("#info").html(tempF);
    $("button").html("°F");
  }
else if(toggleC==false){
  toggleC=true;
  $("#info").html(tempC);
  $("button").html("°C");
}
   
        
  });
  
  

  });