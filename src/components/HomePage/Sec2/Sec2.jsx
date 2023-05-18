import React from 'react';
import img1 from '../../../assets/images (2) (1).png'
import img2 from '../../../assets/images (2).png'
import img3 from '../../../assets/images (2) (5).png'
import img4 from '../../../assets/images (2) (4).png'
import img5 from '../../../assets/images (2) (3).png'
import img6 from '../../../assets/images (2) (2).png'
import './Sec2.css'

const Sec2 = () => {
    return (
        <div className='container'>
            <h1 className="text-center fw-bolder">Toy Garden Gelary</h1>
            <h5 className='text-center my-3'>Exploring the Tapestry of Time through Our Gallery</h5>
            <div className="row g-3 sc-2">
                <div className="col-6 col-md-7">
                    <div className='bg p-4 text-center  rounded'>
                        <img src={img1} alt="" className="rounded-3 img-fluid im " />
                    </div>
                </div>
                <div className="col-6 col-md-5">
                    <div className='bg p-4 text-center  rounded'>
                        <img src={img2} alt="" className="rounded-3 img-fluid im" />
                    </div>
                </div>
                <div className="col-6">
                    <div className='bg p-4 text-center  rounded'>
                        <img src={img3} alt="" className="rounded-3 img-fluid im" />
                    </div>
                </div>
                <div className="col-6">
                    <div className='bg p-4 text-center  rounded'>
                        <img src={img4} alt="" className="rounded-3 img-fluid im " />
                    </div>
                </div>
                <div className="col-6 col-md-5">
                    <div className='bg p-4 text-center  rounded'>
                        <img src={img5} alt="" className="rounded-3 img-fluid im" />
                    </div>
                </div>
                <div className="col-6 col-md-7">
                    <div className='bg p-4 text-center  rounded'>
                        <img src={img6} alt="" className="rounded-3 img-fluid im" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sec2;