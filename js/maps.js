const SFOffice = {
        lat: 37.776176,
        lng: -122.396495
    }

    // Google maps api

    const initMap = () => {
        map = new google.maps.Map(document.getElementById('contact-map'), {
            center: SFOffice,
            zoom: 15
        })

        marker = new google.maps.Marker({
            position: SFOffice,
            map: map,
            title: 'OhmConnect',
            clickable: true
        })

        infoWindow = new google.maps.InfoWindow({
            content: 'OhmConect Office',
            position: SFOffice
        })
    }

    initMap()

   marker.addListener("click", () => infoWindow.open(map, marker))