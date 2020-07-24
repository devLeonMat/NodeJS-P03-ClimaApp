const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            "x-rapidapi-key": "key"
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay Resultados para ${direccion} `)
    }

    const data = resp.data.Results[0];
    const direction = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direction,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
};