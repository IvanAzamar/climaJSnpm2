const axios = require('axios');



const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c915de7f9149591789e089f88cb7b546`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}