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
    { name: "Catedral de León", lat: 42.5994603360669, lng: -5.5671718763307085, cat: "church" },
    { name: "Hospital Universitario Monte San Isidro", lat: 42.639469898018476, lng: -5.593990658634236, cat: "hospital" },
    { name: "Espacio León", lat: 42.61397398195876, lng: -5.5957198594532445, cat: "mall" },
    { name: "Basílica de San Isidoro", lat: 42.601350001587875, lng: -5.570845043345689, cat: "church" },
];

const toro = [
    { name: "Alcázar de Toro", lat: 41.51998732265016, lng: -5.392119666731056, cat: "castle" },
    { name: "Paseo del Espolón", lat: 41.5171275319311, lng: -5.394994994529564, cat: "walkingtour" },
    { name: "Mirador El banco de Toro", lat: 41.517591220401755, lng: -5.411359370578888, cat: "mirador" },
    { name: "Monumento a la Batalla de Toro", lat: 41.50705075133617, lng: -5.406638682379866, cat: "estatua" },
];

const sanpetersburgo = [
    { name: "Lyubashinsky Garden", lat: 59.97293618701417, lng: 30.397908507044125, cat: "park" },
    { name: "Palacio de Invierno", lat: 59.94813375697961, lng: 30.311729901713647, cat: "palace" },
    { name: "Aeropuerto Internacional Púlkovo", lat: 59.81064906257848, lng: 30.268471236369663, cat: "airport" },
    { name: "Palacio de Catalina", lat: 59.732523017946036, lng: 30.394127362714542, cat: "palace" },
];

const nashville = [
    { name: "Lane Motor Museum", lat: 36.145203677234875, lng: -86.73553682128426, cat: "museum" },
    { name: "Cornelia Fort Airpark at Shelby Bottoms", lat: 36.195900436583194, lng: -86.70385437579058, cat: "airpark" },
    { name: "Aeropuerto Internacional de Nashville", lat: 36.129514010513674, lng: -86.67550074833615, cat: "airport" },
    { name: "Hattie B's Hot Chicken - Nashville - Midtown", lat: 36.15441062753463, lng: -86.79686545557149, cat: "chicken" },
];

const vigo = [
    { name: "Parque de Castrelos", lat: 42.214745529842276, lng: -8.730235047744902, cat: "park" },
    { name: "Castelo do Castro", lat: 42.233181356401815, lng: -8.726710784476142, cat: "castle" },
    { name: "Iglesia de San Miguel de Bouzas", lat: 42.227909607946614, lng: -8.752756120589835, cat: "church" },
    { name: "Museo do Mar de Galicia", lat: 42.22553233410909, lng: -8.7699706809974, cat: "museum" },
];

const ciudades = [
    { name: "Por defecto", lat: 40, lng: -4, zoom: 6.5 },
    { name: "León", lat: 42.59880223930111, lng: -5.572670787573717, zoom: 12.5, sitios: leon },
    { name: "Toro", lat: 41.52279239477677, lng: -5.3930411014960375, zoom: 13.5, sitios: toro },
    { name: "San Petersburgo", lat: 59.936765618998884, lng: 30.35364971061799, zoom: 10, sitios: sanpetersburgo },
    { name: "Nashville", lat: 36.16336090305764, lng: -86.78720688633328, zoom: 12, sitios: nashville },
    { name: "Vigo", lat: 42.24224453558687, lng: -8.720965458927786, zoom: 13, sitios: vigo },
];


const selector = document.getElementById("selectorCiudad");
const btnLimpiar = document.getElementById("btnLimpiar");
const btnSismo = document.getElementById("btnSismo");
const btnBuscar = document.getElementById("btnBuscar");
const mapaEnSi = document.getElementById("map");
const selectorCategoria = document.getElementById("selectorCategoria");

var mapaActual;
var marcadores = [];
var listaCoordenadas = [];

function initMap() {
    cambiaMapa(ciudades[0]);
}


btnLimpiar.addEventListener("click", () => {
    limpiarMarcadores();
    actualizaListaMarcadores();
});

btnSismo.addEventListener("click", () => {
    agregarMarcadoresSismos();
});

btnBuscar.addEventListener("click", async function () {
    await ponMarcadorDireccion();
});

mapaEnSi.addEventListener("click", () => {
    ocultar();
});

document.addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
        btnBuscar.click();
    }
});



function addMarker(sitio, icono) {
    let latLng = new google.maps.LatLng(sitio.lat, sitio.lng);
    let latLngBis = { lat: sitio.lat, lng: sitio.lng }
    let marker;

    if (existeMarcadorEnLatLang(latLngBis)) {
        return;
    }

    if (icono != undefined) {
        marker = new google.maps.Marker({
            position: latLng,
            title: sitio.name,
            map: mapaActual,
            cat: icono,
            icon: {
                url: icono,
                size: new google.maps.Size(50, 50),
                anchor: new google.maps.Point(25, 50),
                scaledSize: new google.maps.Size(40, 45)
            }
        });
    } else {
        marker = new google.maps.Marker({
            position: latLng,
            title: sitio.name,
            map: mapaActual,
            cat: markers[0].icon,
        });
    }

    marcadores.push(marker);
    listaCoordenadas.push(latLngBis);
}

function existeMarcadorEnLatLang(latLang) {
    for (let coordenada of listaCoordenadas) {
        if (coordenada.lat == latLang.lat && coordenada.lng == latLang.lng) {
            return true;
        }
    }
    return false;
}

function limpiarMarcadores() {
    for (let marcador of marcadores) {
        marcador.setMap(null);
    }
    marcadores = [];
    listaCoordenadas = [];
}

function cambiaMapa(sitio) {
    mapaActual = new google.maps.Map(document.getElementById("map"), {
        center: { lat: sitio.lat, lng: sitio.lng },
        zoom: sitio.zoom,
    });
}

selector.addEventListener("change", function () {
    let ciudad = ciudades[selector.value];
    cambiarPosicion(ciudad);

    if (ciudad.sitios == null) {
        return;
    }

    for (sitio of ciudad.sitios) {

        let icono = obtenerIconoSitio(sitio.cat);


        addMarker(sitio, icono);
    }
    actualizaListaMarcadores();
});

function cambiarPosicion(sitio) {
    mapaActual.setCenter({ lat: sitio.lat, lng: sitio.lng }); // Madrid
    mapaActual.setZoom(sitio.zoom);
}

function obtenerIconoSitio(categoria) {
    for (let cat of markers) {
        if (cat.name == categoria) {
            return cat.icon;
        }
    }
    return undefined;
}


async function agregarMarcadoresSismos() {
    const url = 'https://www.ign.es/ign/RssTools/sismologia.xml';
    try {
        const response = await fetch(url);
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
        const items = xmlDoc.querySelectorAll('item');
        let added = 0;

        for (let item of items) {
            const fullDescription = item.querySelector('description')?.textContent || 'Sismo';

            // Extraer la ubicación entre "en" y "en la fecha"
            const match = fullDescription.match(/en\s+(.+?)\s+en la fecha/i);
            const description = match ? match[1].trim() : fullDescription;

            const geoLat = item.querySelector('geo\\:lat, lat')?.textContent;
            const geoLong = item.querySelector('geo\\:long, long')?.textContent;

            const magnitudRichterMatch = fullDescription.match(/magnitud\s+([\d.]+)/i);
            const magnitudRichter = magnitudRichterMatch ? parseFloat(magnitudRichterMatch[1]) : null;

            let iconoEarth = "";

            if (magnitudRichter < 3) {
                iconoEarth = "img/earthquake_yellow.png";
            } else if (magnitudRichter < 4) {
                iconoEarth = "img/earthquake_brown.png";
            } else {
                iconoEarth = "img/earthquake_red.png";
            }



            if (geoLat && geoLong) {
                let sitio = {
                    name: description,
                    lat: parseFloat(geoLat),
                    lng: parseFloat(geoLong)
                };
                addMarker(sitio, iconoEarth);
                added++;
            }
        }

        actualizaListaMarcadores();
        let coord = { boundingbox: ['27.4335426', '43.9933088', '-18.3936845', '4.5918885'] }
        hacerFocoEn(coord);

    } catch (error) {
        alert('Error al obtener los datos de sismos.');
        console.error(error);
    }
}







async function ponMarcadorDireccion() {
    const coord = await buscarCoordenadas();

    if (typeof coord === "string") {
        alert(coord);
        return;
    }

    let sitio = {
        name: coord.name,
        lat: parseFloat(coord.lat),
        lng: parseFloat(coord.lon),
    }

    if (selectorCategoria.value == 0) {
        addMarker(sitio);
    } else {
        addMarker(sitio, markers[selectorCategoria.value].icon);
    }


    if (coord.boundingbox) {
        await hacerFocoEn(coord);
    }
    actualizaListaMarcadores();
}

async function hacerFocoEn(coord) {
    const bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(parseFloat(coord.boundingbox[0]), parseFloat(coord.boundingbox[2])), // Suroeste
        new google.maps.LatLng(parseFloat(coord.boundingbox[1]), parseFloat(coord.boundingbox[3]))  // Noreste
    );

    mapaActual.fitBounds(bounds);
}

function actualizaListaMarcadores() {
    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    const tabla = document.createElement("table");
    tabla.classList.add("listaSitios");

    for (let marcador of marcadores) {
        const tr = document.createElement("tr");
        tr.classList.add("filaLista");

        const colCat = document.createElement("td");
        const colNombre = document.createElement("td");
        const imgCat = document.createElement("img");
        imgCat.setAttribute("src", marcador.cat);

        colCat.appendChild(imgCat);
        colNombre.innerHTML = marcador.title;

        tr.appendChild(colCat);
        tr.appendChild(colNombre);

        tabla.appendChild(tr);

    }


    lista.appendChild(tabla);


}

function mostrar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("contenido").style.marginLeft = "300px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}

async function buscarCoordenadas() {
    const direccion = document.getElementById("direccion").value;
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(direccion)}&format=json&limit=1`;

    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mapis/0.2 (hugosv2003@gmail.com)" // Necesario por Nominatim
            }
        });
        const data = await response.json();
        if (data.length > 0) {
            return data[0];
        } else {
            return "No se encontró la dirección.";
        }
    } catch (error) {
        console.error("Error al buscar la dirección:", error);
        return "Error en la búsqueda.";
    }
}

$(document).ready(function () {
    function formatOption(option) {
        if (!option.id) return option.text;
        const icon = $(option.element).data('icon');
        if (icon) {
            return $(`<span><img src="${icon}" /> ${option.text}</span>`);
        }
        return option.text;
    }

    // Inicializar Select2
    $('#selectorCategoria').select2({
        templateResult: formatOption,
        templateSelection: formatOption,
        minimumResultsForSearch: -1
    });

    // Ejemplo: agregar opción nueva dinámicamente
    $('#addOption').click(function () {
        // Agrega una nueva opción con su data-icon
        $('#selectorCategoria').append('<option value="4" data-icon="img/castle.png">Castillo</option>');

        // Actualiza Select2 para que detecte la nueva opción
        $('#selectorCategoria').trigger('change.select2');
    });
});