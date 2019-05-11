import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Navbar from './Navbar'
import RouteViews from './RouteViews'
import store from '../store'

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