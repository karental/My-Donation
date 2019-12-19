import { REQUESTS } from '../../data/dummy-data';
import { LOCATIONS } from '../actions/requests';

const initialState = {
    requests: REQUESTS,
    cityCoordiantes: []
}

export default function requestReducer(state = initialState, action){
    switch (action.type) {
        case LOCATIONS:
            return {
                ...state,
                cityCoordiantes: action.coordinates
            }
        default:
            return state;
    }
}

