import React from 'react'
import { NavLink } from 'react-router-dom'


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <ul className="navbar-container">
                        <li>
                            <NavLink className="navbar-brand" to="/">Voting App</NavLink>
                        </li>
                        <li>
                            <NavLink className="navbar-item" to="/login">Login</NavLink>
                            <NavLink className="navbar-item" to="/register">Register</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


export default Navbar