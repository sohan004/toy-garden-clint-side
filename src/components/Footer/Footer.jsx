import React from 'react';
import logo from '../../assets/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div style={{ marginTop: '80px' }} className='px-2 bg-dark text-white py-5 px-md-5 '>
            <div className="row g-3">
                <div className="col-6 col-md-4 col-lg-4">
                    <div>
                        <img src={logo} style={{ width: '80px' }} alt="" className="img-fluid" />
                        <h4 className='fw-bolder'>Toy Garden</h4>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                    <div>
                        <h5 className="fw-bolder mb-3">PRODUCTS</h5>
                        <p>toys</p>
                        <p>car toys</p>
                        <p>sports toys</p>
                        <p>uniq toys</p>

                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                    <div>
                        <h5 className="fw-bolder mb-3">CONTACT</h5>
                        <p>toygarden@gmail.com</p>
                        <p>+880123654</p>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                    <div>
                        <h5 className="fw-bolder mb-3">SOCIAL LINK</h5>
                        <FaFacebookF className=''></FaFacebookF>
                        <FaInstagram className=' mx-2'></FaInstagram>
                        <FaTwitter className=''></FaTwitter>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                    <div>
                        <h5 className="fw-bolder mb-3">COMMINUTY</h5>
                        <p>github</p>
                        <p>facebook</p>
                        <p>twitter</p>
                    </div>
                </div>
            </div>
            <p className='text-center mt-3'>© Copyright 2023. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;