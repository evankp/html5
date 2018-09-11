$(function () {

    const SFOffice = {
        lat: 37.776176,
        long: -122.396495
    }

    // Google maps api

    window.initMap = () => {
        map = new google.map.Map(document.getElementById('map'), {
            center: SFOffice,
            zoom: 8
        })
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
                Math.cos(radianConvert(start.long) - dest.long)) * 6371)
        }

        geo.getCurrentPosition(function (position) {
            let startCoords = {
                lat: position.coords.latitude,
                long: position.coords.longitude
            }

            $('#lat').text(startCoords.lat)
            $('#long').text(startCoords.long)

            $('#distance').text(calcDistance(startCoords, SFOffice))
        }, function (e) {
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
        })
    } else {
        alert('Geolocation features are, unfortunately not supported on your browser')
        window.location.href = "/"
    }
})