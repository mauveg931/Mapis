function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40, lng: -4 },
        zoom: 6.5,
    });

    let latLng = new google.maps.LatLng(42.61777, -5.61969);
    let marker = new google.maps.Marker({
        position: latLng,
        title: 'IES Villabalter',
        map: map,
    });
}
initMap();


