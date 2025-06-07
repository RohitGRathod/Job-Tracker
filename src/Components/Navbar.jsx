import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg " style={{backgroundColor:'#deeafc'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" >JobTracker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/'  className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link text-dark"} aria-current="page" >Home</NavLink>
                            </li>
                            <li  className="nav-item">
                                <NavLink to='/addjob'  className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link text-dark"} >Add Job</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/stats' className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link text-dark"} >Stats</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
