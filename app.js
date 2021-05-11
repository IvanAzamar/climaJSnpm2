const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'dirección de la ciudad de la que se obtendrá el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {
    try {
        let coordenadas = await lugar.getLugarLatLon(direccion);
        let climaTemp = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${direccion} con coordenadas ${coordenadas.lat} y ${coordenadas.lng} es ${climaTemp} Celsius`;
    } catch (e) {
        return `Error en la ejecucion de una tarea ${e}`;
    }


}

getInfo(argv.direccion).then(mensaje => console.log(mensaje)).catch(e => console(e));