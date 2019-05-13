const request = require('request')
const geocode = require('./utils/geocode.js')

// const url = "https://api.darksky.net/forecast/6b5984a369af0dd1b3f850e22a652249/37.8267,-122.4233"
// const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZHhzaGltOTAiLCJhIjoiY2p2bThvMm95MTZtajQ0bWc2b3Rnd2QwdSJ9.36KsRfLy7tJ8mj4e2_QOaQ&limit=1"

// request({ url: url, json: true }, (error, response) => {
// if (error) {
//     console.log('No connection')
// } else {
//     console.log(`It is currently ${response.body.currently.temperature} degrees. There is a ${response.body.currently.precipProbability}% chance of rain` )
// }
// } )

// request({ url: geoUrl, json: true}, (error, response) => {
   
//     if (error) {
//         console.log('No connections')
//     } else if (response.body.features.length === 0) {
//         console.log('unable to find loaction')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitute = response.body.features[0].center[0]
//         console.log(latitude, longitute)
//     }
    
// })



geocode('London', (error, data) => {
    console.log('error', error)
    console.log('data', data)
})