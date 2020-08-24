var mymap = L.map('main_map').setView([-34.6012424, -58.3861497], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap); 

// L.marker([-34.6012424, -58.3861497]).addTo(mymap);
// L.marker([-34.9387450, -58.4562837]).addTo(mymap);


$.ajax({
    dataType : "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici) {
            L.marker(bici.ubicacion, {title: bici.id}).addTo(mymap);
        });
    }
});