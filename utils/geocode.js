const request = require('request')


const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZHhzaGltOTAiLCJhIjoiY2p2bThvMm95MTZtajQ0bWc2b3Rnd2QwdSJ9.36KsRfLy7tJ8mj4e2_QOaQ&limit=1`
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to Connect')
        } else if (response.body.features.length === 0) {
            callback("Try another search!", undefined )
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode

// const url = "https://api.darksky.net/forecast/6b5984a369af0dd1b3f850e22a652249/37.8267,-122.4233"
// geocode('London', (error, data) => {
//     console.log('error', error)
//     console.log('data', data)
// })