
if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(
        (respuesta)=>{
            const ubi=[21.1506836,-98.4287449];
            const map=L.map('map').setView(ubi,13);
            
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            //marcador
            let mar=L.marker(ubi).addTo(map)
            mar.bindPopup("<b>Es mi casa...</b><br>Las coordenadas de mi casa son:<br>"+"Latitud:"+ubi[0]+" "+"Longitud:"+ubi[1]).openPopup()

            //poligono
            let policasa=[
                
                [21.1508161,-98.4287633],
                [21.150878, -98.428793],
                [21.150928, -98.428753],
                [21.1508149,-98.4286774]


            ]
            let polygon = L.polygon(policasa).addTo(map)

            polygon.on('click',function(i){
                let popup=L.popup()
                .setLatLng(i.latlng)
                .setContent("<b>Este es el perimetro de mi casa</b>")
                .openOn(map);

            })
           

        },
        (error)=>{
            alert("Error de geolocalizacion")
        })

    }
else
    {
        alert("Geolocalizador no disponible")
    }