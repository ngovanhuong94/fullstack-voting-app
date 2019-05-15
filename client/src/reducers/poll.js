import {
    SET_CURRENT_POLL,
    SET_POLLS
} from '../constants'

export const polls = function (state = [], action) {
    switch (action.type) {
        case SET_POLLS:
            return action.polls
        default:
            return state
    }
}


export const currentPoll = function (state = {}, action) {
    switch (action.type) {
        case SET_CURRENT_POLL:
            return action.poll
        default:
            return state
    }
}