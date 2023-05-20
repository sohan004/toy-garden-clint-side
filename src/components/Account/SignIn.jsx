import React, { useContext, useState } from 'react';
import './SignIn.css'
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gif from '../../assets/secure-login.gif'
import { AuthContex } from '../Auth/AuthProvider';
import { useTitle } from '../useTitle/useTitle';

const SignIn = () => {
    useTitle('Toy Garden || SIGN IN')
    const loc = useLocation()
    const navigate = useNavigate()
    const [eror, setEror] = useState('')
    const { signin, google } = useContext(AuthContex)
    const [typ, setTyp] = useState(false)
    const handle = e => {
        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.pass.value
        signin(email, pass)
            .then(() => {
                setEror('')
                navigate(loc?.state ? loc.state : '/')
            })
            .catch(error => setEror(error.message))

    }

    const ggl = () => {
        google().then(() => {
            setEror('')
            navigate(loc?.state ? loc.state : '/')
        }).catch(error => setEror(error.message))
    }
    return (
        <div className='container'>
            <div className="row g-4 d-flex align-items-center">
                <div className="col-12 col-md-6">
                    <div className=''>
                        <form onSubmit={handle} action="">
                            <h5 className="text-secondary">Email</h5>
                            <input placeholder='Email' type="email" name="email" className='p-2 w-100 bg-white border-0 border-bottom border-2' />
                            <div className='position-relative'>
                                <h5 className="text-secondary mt-4">Password</h5>
                                <input placeholder='password' type={typ ? 'text' : 'password'} name="pass" className='p-2 w-100 bg-white border-0 border-bottom border-2' />
                                <h5 className='ey'>{typ ? <FaEye onClick={() => setTyp(!typ)} /> : <FaEyeSlash onClick={() => setTyp(!typ)} />}</h5>
                            </div>
                            <p className="text-danger my-3">{eror}</p>
                            <input type="submit" className='w-100 p-2 mt-4 rounded border-0 bg-warning bg-opacity-75' value="Log in" />
                        </form>
                        <div className='d-flex gap-3 my-4'>
                            <hr className="w-100" />
                            <p>or</p>
                            <hr className="w-100" />
                        </div>
                        <div className='d-flex gap-4 justify-content-center'>
                            <button onClick={ggl} className="btn btn-secondary"><FaGoogle className='or' /> Continue with google</button>
                        </div>
                        <p className='text-center my-3'>You have no account please <Link to="/sign_up">Register</Link></p>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div>
                        <img src={gif} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;