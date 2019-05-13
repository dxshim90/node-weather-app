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
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode