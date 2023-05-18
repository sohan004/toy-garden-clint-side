import React from 'react';
import i1 from '../../../assets/sponsor/Alibaba.svg'
import i2 from '../../../assets/sponsor/Amazon.svg'
import i3 from '../../../assets/sponsor/Daraz.pk Logo.svg'
import i4 from '../../../assets/sponsor/Ebay.svg'
import i5 from '../../../assets/sponsor/Rakuten.svg'
import i6 from '../../../assets/sponsor/Target.svg'
import i7 from '../../../assets/sponsor/Walmart.svg'
import Marquee from 'react-fast-marquee';

const Sec4 = () => {
    return (
        <div style={{marginBottom: '100px'}} className='container'>
            <h1 className="text-center fw-bolder ">Our Sponsor</h1>
            <h5 className='text-center my-3 mb-5'>Sponsored by </h5>
            <Marquee className=''>
                <img src={i2} alt="" className="img-fluid me-5" />
                <img src={i3} alt="" className="img-fluid me-5" />
                <img src={i4} alt="" className="img-fluid me-5" />
                <img src={i5} alt="" className="img-fluid me-5" />
                <img src={i1} alt="" className="img-fluid me-5" />
                <img src={i7} alt="" className="img-fluid me-5" />
                <img src={i6} alt="" className="img-fluid me-5" />
            </Marquee>
        </div>
    );
};

export default Sec4;