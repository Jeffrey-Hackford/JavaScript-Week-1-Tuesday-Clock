var Clock = require('./../js/clock.js').Clock;
var moment = require('moment');


$(document).ready(function(){
  var newClock = new Clock();
  function clockUpdate(){
    $('#currentTime').html(moment().format('LTS'));
  }
  setInterval(clockUpdate, 1000);

  for(var i = 1; i <= 12; i++){
    $('#hour').append("<option value='" + i + "'>" + i + "</option>");
  }

  for(var i = 1; i<= 60; i++){
    $('#minute').append("<option value='" + i + "'>" + i + "</option>");
  }

  $('#alarm').submit(function(event){
    event.preventDefault();
    var hour = parseInt($('#hour').val());
    var minute = parseInt($('#minute').val());
    var ampm = $("#ampm").val();

    if (minute < 10){
      $('#userDisplay').html("<h3>Your alarm is set for " + hour + ":0" + minute + " " + ampm + "</h3>");
    } else {
      $('#userDisplay').html("<h3>Your alarm is set for " + hour + ":" + minute + " " + ampm + "</h3>");
    }
  });
});
