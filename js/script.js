const ciudades = [
    { name: "Por defecto", lat: 40, lng: -4 },
    { name: "León", lat: 42.61777, lng: -5.61969 },
    { name: "Toro", lat: 41.52279239477677, lng: -5.3930411014960375 },
    { name: "San Petersburgo", lat: 59.936765618998884, lng: 30.35364971061799 },
    { name: "Nashville", lat: 36.16336090305764, lng: -86.78720688633328 },
    { name: "Vigo", lat: 41.6488, lng: -0.8891 },
];

const leon = [
    { name: "Catedral", lat: 42.5994603360669, lng: -5.5671718763307085 },
    { name: "Hospital Universitario Monte San Isidro", lat: 42.639469898018476, lng: -5.593990658634236 },
    { name: "Espacio León", lat: 42.61397398195876, lng: -5.5957198594532445 },
    { name: "Basílica de San Isidoro", lat: 42.601350001587875, lng: -5.570845043345689 },
];

const toro = [
    { name: "Alcázar de Toro", lat: 41.51998732265016, lng: -5.392119666731056 },
    { name: "Paseo del Espolón", lat: 41.5171275319311, lng: -5.394994994529564 },
    { name: "Mirador El banco de Toro", lat: 41.517591220401755, lng: -5.411359370578888 },
    { name: "Monumento a la Batalla de Toro", lat: 41.50705075133617, lng: -5.406638682379866 },
];

const sanpetersburgo = [
    { name: "Lyubashinsky Garden", lat: 59.97293618701417, lng: 30.397908507044125 },
    { name: "Palacio de Invierno", lat: 59.94813375697961, lng: 30.311729901713647 },
    { name: "Aeropuerto Internacional Púlkovo", lat: 59.81064906257848, lng: 30.268471236369663 },
    { name: "Palacio de Catalina", lat: 59.732523017946036, lng: 30.394127362714542 },
];

const nashville = [
    { name: "Lane Motor Museum", lat: 36.145203677234875, lng: -86.73553682128426 },
    { name: "Cornelia Fort Airpark at Shelby Bottoms", lat: 36.195900436583194, lng: -86.70385437579058 },
    { name: "Aeropuerto Internacional de Nashville", lat: 36.129514010513674, lng: -86.67550074833615 },
    { name: "Hattie B's Hot Chicken - Nashville - Midtown", lat: 36.15441062753463, lng: -86.79686545557149 },
];

const vigo = [
    { name: "Parque de Castrelos", lat: 42.214745529842276, lng: -8.730235047744902 },
    { name: "Castelo do Castro", lat: 42.233181356401815,lng: -8.726710784476142 },
    { name: "Iglesia de San Miguel de Bouzas", lat: 42.227909607946614, lng: -8.752756120589835 },
    { name: "Museo do Mar de Galicia", lat: 42.22553233410909, lng: -8.7699706809974 },
];


function initMap(ciudad) {
    let map = creaMapa(ciudad);

    addMarker(ciudad, map);
}

document.addEventListener("DOMContentLoaded",creaMapa(ciudades[0]));


function addMarker(sitio, map) {
    let latLng = new google.maps.LatLng(sitio.lat, sitio.lng);
    let marker = new google.maps.Marker({
        position: latLng,
        title: sitio.name,
        map: map,
    });
}

function creaMapa(sitio) {
    return map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: sitio.lat, lng: sitio.lng },
        zoom: 6.5,
    });
}
