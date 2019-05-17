import {
    SET_CURRENT_POLL,
    SET_POLLS
} from '../constants'
import * as API from '../utils/api'
import { addError, removeError } from './error'

export const createPoll = (data) => async (dispatch) => {
    try {
        const poll = await API.call('post', '/polls/new', data)
        dispatch({ 
            type: SET_CURRENT_POLL,
            poll
        })
        dispatch(removeError())
    } catch (err) {
        const { message } = err.response.data
        dispatch(addError(message))
    }
}

export const getPolls = () => async (dispatch) => {
    try {
        const polls = await API.call('get', '/polls')
        dispatch({
            type: SET_POLLS,
            polls 
        })
        dispatch(removeError())
    } catch (err) {
        const { message } = err.response.data 
        dispatch(addError(message))
    }
}


export const getPoll = (pollId) => async (dispatch) => {
    try {
        const poll = await API.call('get', `/polls/${pollId}`)
        dispatch({
            type: SET_CURRENT_POLL,
            poll
        })
        dispatch(removeError())
    } catch (err) {
        const { message } = err.response.data
        dispatch(addError(message))
    }
}