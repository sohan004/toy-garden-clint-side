import React, { useState } from 'react';
import './SignIn.css'
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import gif from '../../assets/secure-login.gif'

const SignUp = () => {
    const [typ, setTyp] = useState(false)
    const handle = e =>{
        e.preventDefault()
    }
    return (
        <div className='container'>
            <div className="row g-4 d-flex align-items-center">
                <div className="col-12 col-md-6">
                    <div className=''>
                        <form onSubmit={handle} action="">
                            <h5 className="text-secondary">Name</h5>
                            <input placeholder='Photo' type="text" name="name" className='p-2 w-100 bg-white border-0 border-bottom border-2' />
                            <h5 className="text-secondary mt-4">Email</h5>
                            <input placeholder='Email' type="email" name="email" className='p-2 w-100 bg-white border-0 border-bottom border-2' />
                            <div className='position-relative'>
                                <h5 className="text-secondary mt-4">Password</h5>
                                <input placeholder='password' type={typ ? 'text' : 'password'} name="pass" className='p-2 w-100 bg-white border-0 border-bottom border-2' />
                                <h5 className='ey'>{typ ? <FaEye onClick={() => setTyp(!typ)} /> : <FaEyeSlash onClick={() => setTyp(!typ)} />}</h5>
                            </div>
                            <h5 className="text-secondary mt-4">Photo url</h5>
                            <input placeholder='photo url' type="text" name="photo" className='p-2 w-100 bg-white border-0 border-bottom border-2' />
                            <input type="submit" className='w-100 p-2 mt-4 rounded border-0 bg-warning bg-opacity-75' value="Register" />
                        </form>
                        <p className='text-center my-3'>Already have account please <Link to="/sign_in">sign in</Link></p>
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

export default SignUp;