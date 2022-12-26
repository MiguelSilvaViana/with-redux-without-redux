import {NUM_MAX_CHANGED, NUM_MIN_CHANGED} from '../actions/actionsTypes'

const initialStore = {
    min: 1,
    max: 10,
}

export default function(state = initialStore, action) {
    switch(action.type) {
        case NUM_MIN_CHANGED:
            return {
                ...state,
                // new value send in action payload
                min: action.payload
            }
        case NUM_MAX_CHANGED:
            return{
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}