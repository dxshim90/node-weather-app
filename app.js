const geocode = require('./utils/geocode.js')
const forcast = require('./utils/forecast.js')





geocode('Rome', (error, data) => {
    console.log('error', error)
    console.log('data', data)

    forcast(data.latitude, data.longitude, (error, data) => {
        console.log('error', error)
        console.log('data', data)
    })



})

