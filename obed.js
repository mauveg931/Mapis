const markers = [
    { name: "ubicacion", icon: 'img/Google_Maps_icon.png' },
    { name: "church", icon: 'img/church.png' },
    { name: "airpark", icon: 'img/airpark.png' },
    { name: "airport", icon: 'img/airport.png' },
    { name: "castle", icon: 'img/castle.png' },
    { name: "chicken", icon: 'img/chicken.png' },
    { name: "estatua", icon: 'img/estatua.png' },
    { name: "hospital", icon: 'img/hospital.png' },
    { name: "mall", icon: 'img/mall.png' },
    { name: "mirador", icon: 'img/mirador.png' },
    { name: "museum", icon: 'img/museum.png' },
    { name: "palace", icon: 'img/palace.png' },
    { name: "park", icon: 'img/park.png' },
    { name: "restaurant", icon: 'img/restaurant.png' },
    { name: "walkingtour", icon: 'img/walkingtour.png' },
];

const leon = [
    { name: "Catedral de León", lat: 42.5994603360669, lng: -5.5671718763307085 , cat: "church" },
    { name: "Hospital Universitario Monte San Isidro", lat: 42.639469898018476, lng: -5.593990658634236 , cat: "hospital" },
    { name: "Espacio León", lat: 42.61397398195876, lng: -5.5957198594532445 , cat: "mall" },
    { name: "Basílica de San Isidoro", lat: 42.601350001587875, lng: -5.570845043345689 , cat: "church" },
];

const toro = [
    { name: "Alcázar de Toro", lat: 41.51998732265016, lng: -5.392119666731056 , cat: "castle" },
    { name: "Paseo del Espolón", lat: 41.5171275319311, lng: -5.394994994529564 , cat: "walkingtour" },
    { name: "Mirador El banco de Toro", lat: 41.517591220401755, lng: -5.411359370578888 , cat: "mirador" },
    { name: "Monumento a la Batalla de Toro", lat: 41.50705075133617, lng: -5.406638682379866 , cat: "estatua" },
];

const sanpetersburgo = [
    { name: "Lyubashinsky Garden", lat: 59.97293618701417, lng: 30.397908507044125 , cat: "park" },
    { name: "Palacio de Invierno", lat: 59.94813375697961, lng: 30.311729901713647 , cat: "palace" },
    { name: "Aeropuerto Internacional Púlkovo", lat: 59.81064906257848, lng: 30.268471236369663 , cat: "airport" },
    { name: "Palacio de Catalina", lat: 59.732523017946036, lng: 30.394127362714542 , cat: "palace" },
];

const nashville = [
    { name: "Lane Motor Museum", lat: 36.145203677234875, lng: -86.73553682128426 , cat: "museum" },
    { name: "Cornelia Fort Airpark at Shelby Bottoms", lat: 36.195900436583194, lng: -86.70385437579058 , cat: "airpark" },
    { name: "Aeropuerto Internacional de Nashville", lat: 36.129514010513674, lng: -86.67550074833615 , cat: "airport "},
    { name: "Hattie B's Hot Chicken - Nashville - Midtown", lat: 36.15441062753463, lng: -86.79686545557149 , cat: "chicken" },
];

const vigo = [
    { name: "Parque de Castrelos", lat: 42.214745529842276, lng: -8.730235047744902 , cat: "park" },
    { name: "Castelo do Castro", lat: 42.233181356401815, lng: -8.726710784476142 , cat: "castle" },
    { name: "Iglesia de San Miguel de Bouzas", lat: 42.227909607946614, lng: -8.752756120589835 , cat: "church" },
    { name: "Museo do Mar de Galicia", lat: 42.22553233410909, lng: -8.7699706809974 , cat: "museum" },
];

const ciudades = [
    { name: "Por defecto", lat: 40, lng: -4, zoom: 6.5 },
    { name: "León", lat: 42.59880223930111, lng: -5.572670787573717, zoom: 12.5, sitios: leon },
    { name: "Toro", lat: 41.52279239477677, lng: -5.3930411014960375, zoom: 13.5, sitios: toro },
    { name: "San Petersburgo", lat: 59.936765618998884, lng: 30.35364971061799, zoom: 10, sitios: sanpetersburgo },
    { name: "Nashville", lat: 36.16336090305764, lng: -86.78720688633328, zoom: 12, sitios: nashville },
    { name: "Vigo", lat: 42.24224453558687, lng: -8.720965458927786, zoom: 13, sitios: vigo },
];

