import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import decode from 'jwt-decode'

import Navbar from './Navbar'
import RouteViews from './RouteViews'
import store from '../store'
import { SET_CURRENT_USER } from '../constants'
import { setToken } from '../utils/api'

// load token
if (localStorage.getItem('token')) {
    try {
        store.dispatch({
            type: SET_CURRENT_USER,
            user: decode(localStorage.getItem('token'))
        })
        // set header axios
        setToken(localStorage.getItem('token'))
    } catch (err) {
        console.log(err)
        store.dispatch({ 
            type: SET_CURRENT_USER,
            user: null
        })
        // set header axios
        setToken(null)
    }
}

class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Fragment>
                        <Navbar />
                        <RouteViews />
                    </Fragment>
                </BrowserRouter>
            </Provider>
        )
    }
}


export default App