var request = require('request');
var url= 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9773ca172e48ec90c3cf47d859589a92';;

request({
  url:url,
  json:true
}, function(error,response,body){
  if (error) {
    console.log('Unable to fetch weather.');
  } else {
    console.log('It\'s ' + body.main.temp + ' in ' + body.name + '!');
  }
})
