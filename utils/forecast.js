const request = require('request')

const forcast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/6b5984a369af0dd1b3f850e22a652249/${latitude},${longitude}`
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect')
        } else if (response.body.error) {
            callback('Invalid Coordinates')
        } else {
            callback(console.log(`It is currently ${response.body.currently.temperature} degrees. There is a ${response.body.currently.precipProbability}% chance of rain`)
            )
        }
    })



}

module.exports = forcast
