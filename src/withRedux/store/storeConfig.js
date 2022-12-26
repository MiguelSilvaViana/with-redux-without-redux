import {createStore ,combineReducers} from 'redux'
import numbersReducer from './reducers/numsReducers'


const reducers = combineReducers({
    nums: numbersReducer
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig