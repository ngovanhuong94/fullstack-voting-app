import React from 'react'

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
        console.log({ username, password })
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

export default Auth