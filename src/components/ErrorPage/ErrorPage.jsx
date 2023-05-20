import React from 'react';
import eror from '../../assets/404.gif'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='container'>
            <div className="row g-4 d-flex align-items-center">
                <div className="col-12 col-md-6">
                    <div>
                        <img src={eror} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className='text-center'>
                        <h3>This page not found</h3>
                        <Link to="/"><button className="mt-4 btn btn-secondary">Go To Home Page</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;