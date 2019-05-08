import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import RouteViews from './RouteViews'

class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Fragment>
                    <Navbar />
                    <RouteViews />
                </Fragment>
            </BrowserRouter>
        )
    }
}


export default App