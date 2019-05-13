const geocode = require('./utils/geocode.js')
const forcast = require('./utils/forecast.js')



const userInput = process.argv[2].toString()

geocode(userInput, (error, data) => {
    if (error) {
       return console.log(error)
    }


    forcast(data.latitude, data.longitude, (error, forcastData) => {
        if (error) {
            console.log(error)
        }
        console.log(data.location)
        console.log(forcastData)
    })



})

