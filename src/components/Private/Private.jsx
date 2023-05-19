import React, { useContext } from 'react';
import { AuthContex } from '../Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {
    const loc = useLocation()
    const { user, load } = useContext(AuthContex)
    if (load) {
        return <div style={{marginTop: '150px'}} className="d-flex  justify-content-center">
            <div className="spinner-border  text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    if (user) {
        return children
    } else {
        return <Navigate to='/sign_in' state={loc.pathname}></Navigate>
    }
};

export default Private;