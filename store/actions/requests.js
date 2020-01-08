export const LOCATIONS = 'LOCATIONS';
export const CREATE_LOCATION = 'CREATE_LOCATION';
export const CREATE_REQUEST = 'CREATE_REQUEST';
export const SET_REQUESTS = 'SET_REQUESTS';

import Request from '../../models/Requests';

import axios from 'axios';

function getLocations(coordinates) {
    return {
        type: LOCATIONS,
        coordinates
    }
}

export const fetchRequests = () => {
    return async dispatch => {
        const response = await fetch('https://my-donation-f13d6.firebaseio.com/requests/r1.json');
        const resData = await response.json();
        const loadedRequests = [];
        for (const key in resData) {
            loadedRequests.push(new Request(key, resData[key].title, resData[key].location, resData[key].description, resData[key].organization))
        }
        dispatch({ type: SET_REQUESTS, requests: loadedRequests });
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

export const createRequest = (title, location, description, organization) => {
    return async (dispatch, getState) => {
        const date = new Date();
        const orgId = getState().auth.userId
        const token = getState().auth.token;
        const response = await fetch(`https://my-donation-f13d6.firebaseio.com/requests/${orgId}.json?auth=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                location,
                description,
                organization,
                date: date.toISOString,
                orgId: orgId
            })
        });

        const resData = await response.json();
        dispatch({
            type: CREATE_REQUEST, requestData: {
                id: resData.name,
                title,
                location,
                description,
                organization,
                date: date,
                orgId: orgId

            }
        });
    }
}