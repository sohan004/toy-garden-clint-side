import React, { useContext } from 'react';
import { Link, NavLink, useNavigation } from 'react-router-dom';
import { AuthContex } from '../Auth/AuthProvider';
import blank from '../../assets/blank-profile-picture-gb085c28e0_1280.png'
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import logo from '../../assets/logo.png'

const Nav = () => {

    const { user, out } = useContext(AuthContex)
    return (
        <div className='bg-white position-sticky top-0 z-2'>
            <nav className="navbar navbar-expand-lg  ">
                <div className="container">
                    <div className='d-flex align-items-center gap-3'>
                        <img style={{width: '90px'}} src={logo} alt="" className="img-fluid" />
                        <h4 className='fw-bolder'>Toy Garden</h4>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <NavLink className={({ isActive }) => `nav-link fw-bolder ${isActive ? 'text-primary' : ''}`} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className={({ isActive }) => `nav-link fw-bolder ${isActive ? 'text-primary' : ''}`} aria-current="page" to="/all_toy">All Toys</NavLink>
                            </li>
                            {user && <li className="nav-item me-4">
                                <NavLink className={({ isActive }) => `nav-link fw-bolder ${isActive ? 'text-primary' : ''}`} aria-current="page" to="/my_toy">My Toys</NavLink>
                            </li>}
                            { user && <li className="nav-item me-4">
                                <NavLink className={({ isActive }) => `nav-link fw-bolder ${isActive ? 'text-primary' : ''}`} aria-current="page" to="/add_toy">Add Toy</NavLink>
                            </li>}
                            <li className="nav-item me-4">
                                <NavLink className={({ isActive }) => `nav-link fw-bolder ${isActive ? 'text-primary' : ''}`} aria-current="page" to="/blog">Blogs</NavLink>
                            </li>
                        </ul>
                        {user && <img id='ttip' style={{ width: '50px', height: '50px' }} src={user.photoURL ? user.photoURL : blank} alt="" className="img-fluid rounded-circle me-4" />}
                        {user && <ReactTooltip
                            anchorId="ttip"
                            place="bottom"
                            content={user.displayName}
                        />}
                        {user ? <button onClick={() => out()} className="btn btn-danger">log out</button> : <Link to="/sign_in"><button className="btn btn-primary">log in</button></Link>}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;