function myFunction() {
  var x = "";
  if (document.getElementById("location").value !== "") {
    x = document.getElementById("location").value;
  } else {
    x = "salt";
  }
  var api_url = `http://api.positionstack.com/v1/forward?query=${x}&access_key=ab5672ba107475fa0d28677a6523db2e`;

  // Defining async function
  async function getapi(api_url) {
    // Storing response
    const response = await fetch(api_url);

    // Storing data in form of JSON
    var data = await response.json();
    var lat = data.data[0].latitude;
    var lng = data.data[0].longitude;

    // The location of Uluru
    const uluru = { lat: lat, lng: lng };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

  // Calling that async function
  getapi(api_url);
}
