const request = require('request');

var getWeather = (lat,lng,callback) => {
    request({
      url :`https://api.darksky.net/forecast/f4dd0eed63ea849471ef27f7d757e964/${lat},${lng}`,
      json: true
    },(error, response,body) => {
        if(error) {
            callback('Unable to connect to forecast server');
        } else if(response.statusCode === 400) {
            callback('Unable to find this address');
        } else if(response.statusCode === 200) {
            callback(undefined,{
                temperature :  body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;

