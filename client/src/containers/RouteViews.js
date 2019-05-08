import React from 'react'
import { Switch, Route } from 'react-router-dom'

// pages
import Home from '../pages/Home'

const RouteViews = () => (
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
)

export default RouteViews