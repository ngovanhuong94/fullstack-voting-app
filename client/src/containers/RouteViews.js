import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
// pages
import Home from '../pages/Home'
import AuthPage from '../pages/AuthPage'
import CreatePollPage from '../pages/CreatePollPage'
import PollPage from '../pages/PollPage'

const RouteViews = ({ auth }) => (
    <main className="container">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route 
                exact
                path="/login"
                render={() => <AuthPage authType="login" isAuthenticated={auth.isAuthenticated}  />}
            />
            <Route 
                exact
                path="/register"
                render={() => <AuthPage authType="register" isAuthenticated={auth.isAuthenticated} />}
            />
            <Route 
                exact
                path="/polls/new"
                render={() => <CreatePollPage isAuthenticated={auth.isAuthenticated} />}
            />
            <Route 
                exact
                path="/poll/:id"
                render={(props) => <PollPage isAuthenticated={auth.isAuthenticated} {...props}/>}
            />
        </Switch>
    </main>
)

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps)(RouteViews)