var request = require('request');
var url= 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9773ca172e48ec90c3cf47d859589a92' + '&units=metric';

module.exports = function(callback) {
request({
  url:url,
  json:true
}, function(error,response,body){
  if (error) {
    callback('Unable to fetch weather.');
  } else {
    callback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
  }
})
};
