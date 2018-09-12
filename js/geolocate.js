$(function () {
    
    const SFOffice = {
        lat: 37.776176,
        lng: -122.396495
    }

    // geolocate functions
    let geo = navigator.geolocation

    if (geo) {
        const radianConvert = degrees => {
            return (degrees * Math.PI)/180;
        }

        const calcDistance = (start, dest) => {
            return Math.round(Math.acos(Math.sin(radianConvert(start.lat)) * Math.sin(radianConvert(dest.lat))
                + Math.cos(radianConvert(start.lat)) * Math.cos(radianConvert(dest.lat)) *
                Math.cos(radianConvert(start.lng) - dest.lng)) * 6371)
        }

        geo.getCurrentPosition(function (position) {
            let startCoords = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                accuracy: position.coords.accuracy
            }

            $('#lat').text(startCoords.lat)
            $('#long').text(startCoords.lng)
            $('#accuracy').text(startCoords.accuracy)

            $('#distance').text(calcDistance(startCoords, SFOffice))
            var trackMap = new google.maps.Map(document.getElementById('track-map'), {
                    zoom: 12,
                    center: {lat: startCoords.lat, lng: startCoords.lng}
            })

            var trackMarker = new google.maps.Marker({
                position: {lat: startCoords.lat, lng: startCoords.lng},
                map: trackMap,
                title: 'Your position',
                clickable: true
            })

            var trackInfoWindow = new google.maps.InfoWindow({
                content: 'Your position',
                position: {lat: startCoords.lat, lng: startCoords.lng}
            })

            trackMarker.addListener("click", () => infoWindow.open(map, marker))

            geo.watchPosition(function () {
                // success
                var newPosition = {lat: position.coords.latitude, lng: position.coords.longitude}

                trackMap.center = newPosition
                trackMarker.position = newPosition
                trackInfoWindow.position = newPosition
            }, function (e) {
                // error
                errorAlert(e)
            })
        }, function (e) {
            errorAlert(e)
        }, {timeout: 60000, maximumAge: 200})

    } else {
        alert('Geolocation features are, unfortunately not supported on your browser')
        window.location.href = "/"
    }

    function errorAlert(e) {
        switch (e.code) {
                case 1:
                    alert('Location permission denied')
                    window.location.href = '/'
                    break

                case 2:
                    alert('Your location is not available')
                    window.location.href = '/'
                    break

                case 3:
                    alert('Location request timed out')
                    window.location.href = '/'
                    break

                default:
                    alert('Unknown error')
                    window.location.href = '/'
            }
    }
})