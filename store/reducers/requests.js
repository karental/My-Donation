import { REQUESTS } from '../../data/dummy-data';
import { LOCATIONS, SET_REQUESTS } from '../actions/requests';
import { CREATE_REQUEST } from '../actions/requests';

import Request from '../../models/Requests';

const initialState = {
    requests: REQUESTS,
    cityCoordiantes: [],
}

export default function requestReducer(state = initialState, action) {
    switch (action.type) {
        case SET_REQUESTS:

            return {
                requests: action.requests
            }
        case LOCATIONS:
            return {
                ...state,
                cityCoordiantes: action.coordinates
            }
        case CREATE_REQUEST:            
            const newRequest = new Request(
                action.requestData.id, 
                action.requestData.title, 
                action.requestData.location, 
                action.requestData.description, 
                action.requestData.organization,
                action.requestData.date,
                );
            return {
                ...state,
                requests: state.requests.concat(newRequest),
            };
        default:
            return state;
    }
}
