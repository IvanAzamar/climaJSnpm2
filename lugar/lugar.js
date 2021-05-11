const axios = require('axios');

const getLugarLatLon = async(direccion) => {
    let codeurl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ codeurl }&key=AIzaSyB9OcQm0Eotpcru7f1gxzMmtX8IAKI9FmA`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para esta ciudad ${direccion}`);
    }
    let location = resp.data.results[0];
    let coordenadas = location.geometry.location;

    console.log('Direccion en latitud y longitud es:', location.formatted.address);
    console.log('lat', coordenadas.lat);
    console.log('lng', coordenadas.lng);

    return {
        direccion: location.formatted.address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}

module.exports = {
    getLugarLatLon
}