import React from 'react'
import { Switch, Route } from 'react-router-dom'

// pages
import Home from '../pages/Home'
import AuthPage from '../pages/AuthPage'

const RouteViews = () => (
    <main className="container">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route 
                exact
                path="/login"
                render={() => <AuthPage authType="login" />}
            />
            <Route 
                exact
                path="/register"
                render={() => <AuthPage authType="register" />}
            />
        </Switch>
    </main>
)

export default RouteViews