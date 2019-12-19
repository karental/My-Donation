export const LOCATIONS = 'LOCATIONS';
import axios from 'axios';

function getLocations(coordinates) {
    return {
        type: LOCATIONS,
        coordinates
    }
}

export const getCoordinates = (requests) => {
    return dispatch => {
        let cityCoordinates = [];
        for (let i = 0; i < requests.length; i++) {
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${requests[i].location}&key=AIzaSyBKTFFfigRBdD_eqXlrRXedMMKYhT7RgWE`)
                .then(r => r.data)
                .then(data => {
                    let longitude = data.results[0].geometry.location.lng;
                    let latitude = data.results[0].geometry.location.lat;
                    let coor = { title: requests[i].title, longitude: longitude, latitude: latitude }
                    cityCoordinates.push(coor)
                    if (cityCoordinates.length !== requests.length) {
                    } else {
                        dispatch(getLocations(cityCoordinates));
                    }
                });
        }
    }
}
