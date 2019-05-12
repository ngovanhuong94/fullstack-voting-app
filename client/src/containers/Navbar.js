import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../actions/auth'

class Navbar extends React.Component {
    handleLogout = (e) => {
        this.props.logout();
    }
    render() {
        const { isAuthenticated } = this.props
        return (
            <nav className="navbar">
                <div className="container">
                    <ul className="navbar-container">
                        <li>
                            <NavLink className="navbar-brand" to="/">Voting App</NavLink>
                        </li>
                        { isAuthenticated 
                            ? (
                                <li>
                                    <NavLink className="navbar-item" to="/">Create Poll</NavLink>
                                    <NavLink 
                                        onClick={this.handleLogout} 
                                        className="navbar-item" 
                                        to="/#"
                                    >
                                        Logout
                                    </NavLink>
                                </li>
                            )
                            : (
                                <li>
                                    <NavLink className="navbar-item" to="/login">Login</NavLink>
                                    <NavLink className="navbar-item" to="/register">Register</NavLink>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navbar)