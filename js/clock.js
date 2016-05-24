var moment = require('moment');

exports.Clock = function(){
  this.currentTime = moment().format('LTS');
  this.alarmTime = null;
};
