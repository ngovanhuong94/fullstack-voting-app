import React from 'react'

class Auth extends React.Component {
    render () {
        return (
            <div>
                <form className="form">
                    <label className="form-label">Username</label>
                    <input 
                        type="text"
                        placeholder="Username"
                        autocomplete="off"
                        className="form-input"
                    />
                    <label className="form-label">Password</label>
                    <input 
                        type="password"
                        placeholder="Password"
                        autocomplete="off"
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