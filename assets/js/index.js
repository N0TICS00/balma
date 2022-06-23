// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 45.082204338988184, lng: 7.381401371321384 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;
 