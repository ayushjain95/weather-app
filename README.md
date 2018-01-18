# weather-app
It's a very basic app that enables its user to enter address from command line and get temperature object with two parameters-:
  a) Current Temperature
  b) Apparent Temperature (Exact Current Temperature by taking humidity and other parameters into account)
This app also returns and prints Address, Longitude and Latitude parameters to the console.

It extensively uses <a href="https://www.npmjs.com/package/axios">axios</a> library as it supports promises(ES6 JS) directly.
It also uses <a href="https://www.npmjs.com/package/yargs">Yargs</a> library to parse command line arguments.

#Command(Input)
  node app-promise -a "<Input Address>"
  
#Sample Input
  node app-promise -a "110035"
  
#Sample output
  Address: New Delhi, Delhi 110035, India
  Latitude:  28.6738274
  Longitude : 77.1642584
  Temperature: 62.72
  Apparent Temperature: 62.72
