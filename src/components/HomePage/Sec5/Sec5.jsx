import React, { useEffect, useState } from 'react';
import Item from './Item';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sec5 = () => {
    const [category, setCategory] = useState('sports car')
    const [data, setData] = useState([])
    const [tf, setTf] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/category/${category}`)
            .then(res => res.json()).then(categoryData => setData(categoryData))
    }, [category])
    return (
        <div style={{ marginBottom: '80px' }} className='container'>
            <h1 className="text-center fw-bolder">Shop By Category</h1>
            <h5 className='text-center my-3'>this shop devide by category</h5>
            <div className='d-flex justify-content-center border py-3  my-4'>
                <button onClick={() => setCategory('sports car')} className={`btn  rounded-0 ${category === 'sports car' ? 'btn-danger' : 'btn-secondary'}`}>Sports car</button>
                <button onClick={() => setCategory('police car')} className={`btn  rounded-0 ${category === 'police car' ? 'btn-danger' : 'btn-secondary'}`}>Police car</button>
                <button onClick={() => setCategory('truck car')} className={`btn  rounded-0 ${category === 'truck car' ? 'btn-danger' : 'btn-secondary'}`}>Truck car</button>
            </div>
            <div className="row g-3 ">
                {data.slice(0, tf ? 2 : data.length).map(d => <Item key={d._id} d={d}></Item>)}
            </div>
            <div className='text-center mt-3'>
                {data.length > 2 && <button onClick={() => setTf(!tf)} className="btn btn-danger">{tf ? 'See More' : 'See Less'}</button>}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Sec5;