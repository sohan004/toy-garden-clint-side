import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg my-3 ">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <NavLink className={({ isActive }) => `nav-link fw-bolder ${isActive ? 'text-primary' : ''}`} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className={({ isActive }) => `nav-link fw-bolder ${isActive ? 'text-primary' : ''}`} aria-current="page" to="/ono">All Toys</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className={({ isActive }) => `nav-link fw-bolder ${isActive ? 'text-primary' : ''}`} aria-current="page" to="/ono">My Toys</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className={({ isActive }) => `nav-link fw-bolder ${isActive ? 'text-primary' : ''}`} aria-current="page" to="/ono">Add Toy</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className={({ isActive }) => `nav-link fw-bolder ${isActive ? 'text-primary' : ''}`} aria-current="page" to="/ono">Blogs</NavLink>
                            </li>
                        </ul>
                        <button className="btn btn-primary">log in</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;