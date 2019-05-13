const request = require('request')

const url = "https://api.darksky.net/forecast/6b5984a369af0dd1b3f850e22a652249/37.8267,-122.4233"

request({ url: url, json: true }, (error, response) => {
//   console.log(response.body.currently)
console.log(`It is currently ${response.body.currently.temperature} degrees. There is a ${response.body.currently.precipProbability}% chance of rain` )
} )