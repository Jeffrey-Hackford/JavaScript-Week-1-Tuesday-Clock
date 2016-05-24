var Clock = require('./../js/clock.js').Clock;
var moment = require('moment');
var hour;
var minute;
var ampm;

$(document).ready(function(){
  function clockUpdate(){
    $('#currentTime').html(moment().format('LTS'));
  }
  setInterval(clockUpdate, 1000);

  for(var i = 1; i <= 12; i++){
    $('#hour').append("<option value='" + i + "'>" + i + "</option>");
  }

  for(var i = 0; i <= 60; i++){
    if (i < 10){
      $('#minute').append("<option value='0" + i + "'>0" + i + "</option>");
    } else {
      $('#minute').append("<option value='" + i + "'>" + i + "</option>");
    }
  }

  $('#alarm').submit(function(event){
    event.preventDefault();
    var hour = $('#hour').val();
    var minute = $('#minute').val();
    var ampm = $("#ampm").val();
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
