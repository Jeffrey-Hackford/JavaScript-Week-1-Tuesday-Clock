var Clock = require('./../js/clock.js').Clock;
var moment = require('moment');
var hour;
var minute;
var ampm;

$(document).ready(function(){
  var newClock = new Clock();
  function clockUpdate(){
    $('#currentTime').html(moment().format('LTS'));
  }
  setInterval(clockUpdate, 1000);

  for(var i = 1; i <= 12; i++){
    $('#hour').append("<option value='" + i + "'>" + i + "</option>");
  }

  for(var i = 1; i <= 60; i++){
    $('#minute').append("<option value='" + i + "'>" + i + "</option>");
  }

  $('#alarm').submit(function(event){
    event.preventDefault();
    var hour = $('#hour').val();
    var minute = $('#minute').val();
    var ampm = $("#ampm").val();
    if (minute < 10){
      minute = "0" + minute;
    }
    $('#userDisplay').html("<h3>Your alarm is set for " + hour + ":" + minute + " " + ampm + "</h3>");

  function alarm(){
    var userTime = hour + ":" + minute + ":00 " + ampm;
    var alarmString = moment().format('LTS').toString();
    console.log(userTime);
    console.log(alarmString);
    if(alarmString === userTime){
      $('body').addClass('flash');
    }
  }
    setInterval(alarm, 1000);
  });
});
