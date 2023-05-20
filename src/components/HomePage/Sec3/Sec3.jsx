import React from 'react';
import './Sec3.css'
import blank from '../../../assets/blank-profile-picture-gb085c28e0_1280.png'

const Sec3 = () => {
    return (
        <div className='container'>
            <h1 className="text-center fw-bolder">Customer Saying</h1>
            <h5 className='text-center my-3'>Customer Reviews</h5>
            <div className='d-flex flex-column flex-md-row gap-4'>
                <div className='w-100 w-md-50 p-4 bg-danger bg-opacity-25'>
                    <div>
                        <img src={blank} style={{ width: '80px' }} className='img-fluid rounded-circle' alt="" />
                        <h3 className='my-3'>Zina Don</h3>
                        <p>Toy Garden is a fantastic online destination for toy enthusiasts of all ages. </p>
                    </div>
                </div>
                <div className='w-100 w-md-50 p-4 bg-primary bg-opacity-25'>
                    <div >
                        <img src={blank} style={{ width: '80px' }} className='img-fluid rounded-circle' alt="" />
                        <h3 className='my-3'>Maga Tin</h3>
                        <p>The website has a wide range of toys to cater to different interests and preferences. The interface is user-friendly.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sec3;