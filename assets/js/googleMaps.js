function initMap() {
    const eq = { lat: 1.305880, lng: 103.830930 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: eq,
    });
    const marker = new google.maps.Marker({
        position: eq,
        map: map,
    });
}
