const ciudades = [
    { name: "Por defecto", lat: 40, lng: -4 },
    { name: "León", lat: 42.61777, lng: -5.61969 },
    { name: "Toro", lat: 41.52279239477677, lng: -5.3930411014960375 },
    { name: "Guarromán", lat: 39.4699, lng: -0.3763 },
    { name: "Córdoba", lat: 37.3886, lng: -5.9823 },
    { name: "Cádiz", lat: 36.5210751941024, lng: -6.281351540394689 },
    { name: "Tennessee", lat: 36.1627, lng: -86.7816 },
    { name: "Vigo", lat: 41.6488, lng: -0.8891 },
    { name: "Kabukicho", lat: 35.6938, lng: 139.7034 },
];

const select = document.getElementById("selector");

function initMap(ciudad) {
    let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: ciudad.lat, lng: ciudad.lng },
        zoom: 6.5,
    });

    let latLng = new google.maps.LatLng(ciudad.lat, ciudad.lng);
    let marker = new google.maps.Marker({
        position: latLng,
        title: ciudad.name,
        map: map,
    });
}

function centradoInicial(){

     let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40, lng: -4 },
        zoom: 6.5,
    });

}

document.addEventListener("DOMContentLoaded", function () {
    centradoInicial();
});
initMap(ciudades[0]);



