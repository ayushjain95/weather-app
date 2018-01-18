const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
    .options({
        a : {
            demand : true,
            alias : 'address',
            describe: 'Address to fetch weather for',
            string: true
        }

    })

    .help()
    .alias('help','h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);

var geoCodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geoCodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl =    `https://api.darksky.net/forecast/f4dd0eed63ea849471ef27f7d757e964/${lat},${lng}`;
    console.log(`Address: ${response.data.results[0].formatted_address}`);
    console.log(`Latitude:  ${lat}`);
    console.log(`Longitude : ${lng}`);
    return axios.get(weatherUrl);
    }).then((response) => {
        var temerature = response.data.currently.temperature;
        var apparentTemperature =  response.data.currently.apparentTemperature;
        console.log(`Temperature: ${temerature}`);
        console.log(`Apparent Temperature: ${apparentTemperature}`);
    }).catch((e) => {
        if(e.code === 'ENOTFOUND') {
            console.log('Unable to connect to the servers');
        } else{
            console.log(e.message);
        }
});
