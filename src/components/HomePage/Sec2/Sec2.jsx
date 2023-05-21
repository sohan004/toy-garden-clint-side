import React, { useEffect } from 'react';
import img1 from '../../../assets/car4.png'
import img2 from '../../../assets/car1.png'
import img3 from '../../../assets/car2.png'
import img4 from '../../../assets/car3.png'
import img5 from '../../../assets/car5.png'
import img6 from '../../../assets/images (2) (2).png'
import './Sec2.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const Sec2 = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='container'>
            <h1 className="text-center fw-bolder">Toy Garden Gelary</h1>
            <h5 className='text-center my-3'>Exploring the Tapestry of Time through Our Gallery</h5>
            <div className="row g-2 mt-4 sc-2">
                <div className="col-12 col-md-6">
                    <div className="row g-2">
                        <div className="col-6">
                            <div>
                            <img data-aos='fade-up' src={img2} alt="" className="img-fluid rounded-4" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div>
                            <img data-aos='fade-down' src={img3} alt="" className="img-fluid rounded-4" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div>
                            <img data-aos='fade-down' src={img4} alt="" className="img-fluid rounded-4" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div>
                            <img data-aos='fade-up' src={img5} alt="" className="img-fluid rounded-4" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div>
                        <img data-aos='fade-up' src={img1} alt="" className="img-fluid rounded-4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sec2;