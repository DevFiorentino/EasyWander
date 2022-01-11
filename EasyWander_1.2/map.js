function initMap() {
    let location = {lat: 40.8563100, lng: 14.2464100};
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location
    });
}