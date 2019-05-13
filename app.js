const request = require('request')
const geocode = require('./utils/geocode.js')
const forcast = require('./utils/forecast.js')





geocode('Moscow', (error, data) => {
    console.log('error', error)
    console.log('data', data)
})

forcast(-0.1275, 51.50722, (error, data) => {
    console.log('error', error)
    console.log('data', data)
})