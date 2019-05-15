import {
    SET_CURRENT_POLL,
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