let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: new google.maps.LatLng(13.0933, 80.2842),
    mapTypeId: "terrain",
  });

  fetch("./js/geo_data.json")
    .then((reponse) => reponse.json())
    .then((geoData) => {
      for (let i = 0; i < geoData.length; i++) {
        const latLng = new google.maps.LatLng(
          geoData[i].latitude,
          geoData[i].longitude
        );

        new google.maps.Marker({
          position: latLng,
          map: map,
        });
      }
    });
}