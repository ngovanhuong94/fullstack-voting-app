import {
    SET_CURRENT_USER,
} from '../constants'
import { addError, removeError } from './error'
import * as API  from '../utils/api'


export const authUser = (path, data) => async (dispatch) => {
    try {
        const { token, ...user } = await API.call('post', `/auth/${path}`, data);
        localStorage.setItem('token', token)
        dispatch({
            type: SET_CURRENT_USER,
            user
        })
        dispatch(removeError())
    } catch (err) {
        const { message } = err.response.data
        dispatch(addError(message))
    }
}
