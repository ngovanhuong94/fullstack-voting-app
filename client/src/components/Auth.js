import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { authUser } from '../actions/auth'

class Auth extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => { this.setState({ [e.target.name]: e.target.value })}
    handleSubmit = (e) => { 
        e.preventDefault()
        const { username, password } = this.state
        const { authType } = this.props
        this.props.authUser(authType || 'login', { username, password })
    }
    
    render () {
        const { username, password } = this.state
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label className="form-label">Username</label>
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        placeholder="Username"
                        autoComplete="off"
                        className="form-input"
                    />
                    <label className="form-label">Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        placeholder="Password"
                        autoComplete="off"
                        className="form-input"
                    />
                    <div className="button-center">
                        <button type="submit" className="button">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}



export default connect(null, { authUser })(withRouter(Auth))