import {
    SET_CURRENT_USER,
} from '../constants'
import { addError, removeError } from './error'
import * as API  from '../utils/api'


export const logout = () => (dispatch) => {
    // reset localstorage
    localStorage.clear()
    // reset axios header
    API.setToken(null)
    // reset auth reducer
    dispatch({
        type: SET_CURRENT_USER,
        user: null
    })
}

export const authUser = (path, data) => async (dispatch) => {
    try {
        // get data from server
        const { token, ...user } = await API.call('post', `/auth/${path}`, data);
        // save token in localstorage
        localStorage.setItem('token', token)
        // set axios header
        API.setToken(token)
        // send user data to redux store
        dispatch({
            type: SET_CURRENT_USER,
            user
        })
        // remove error messages
        dispatch(removeError())
    } catch (err) {
        const { message } = err.response.data
        dispatch(addError(message))
    }
}
