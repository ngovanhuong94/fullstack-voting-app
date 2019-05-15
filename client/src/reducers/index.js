import { combineReducers } from 'redux'
import errorReducer from './error'
import authReducer from './auth'
import { currentPoll, polls } from './poll'

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    polls,
    currentPoll
})