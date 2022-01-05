function initMap() {
    let location = {lat: -25.363, lng: 131.044};
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: location
    });
}