import {NUM_MAX_CHANGED, NUM_MIN_CHANGED} from './actionsTypes'

/* create action creator */

export function changeNumMin(newNum) {
    return {
        type: NUM_MIN_CHANGED,
        payload: newNum
    }
}

export function changeNumMax(newNum) {
    return {
        type: NUM_MAX_CHANGED,
        payload: newNum
    }
}