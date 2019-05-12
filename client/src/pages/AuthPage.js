import React from 'react'
import { Redirect } from 'react-router-dom'
import Auth from '../components/Auth'
import ErrorMessage from '../components/ErrorMessage'

const AuthPage =  ({ isAuthenticated }) => {
    if (isAuthenticated) return <Redirect to="/" />

    return (
        <div>
            <ErrorMessage />
            <Auth />
        </div>
    )
}

export default AuthPage