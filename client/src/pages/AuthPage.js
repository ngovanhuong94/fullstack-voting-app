import React from 'react'
import Auth from '../components/Auth'
import ErrorMessage from '../components/ErrorMessage'

class AuthPage extends React.Component {
    render () {
        return (
            <div>
                <ErrorMessage />
                <Auth />
            </div>
        )
    }
}

export default AuthPage