import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactStarsRating from 'react-awesome-stars-rating';
import { useTitle } from '../useTitle/useTitle';


const Details = () => {
    useTitle('Toy Garden || TOY DETAILS')
    const {
        toyName,
        photo,
        price,
        quantity,
        name,
        email,
        details,
        category,
        ratings,
    } = useLoaderData()
    return (
        <div className='container'>
            <div className="row g-4 d-flex align-items-center">
                <div className="col-12 col-md-6">
                    <div>
                        <img src={photo} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h4 className='mb-4'>Toy Name: {toyName}</h4>
                    <h5 className='mb-4'>Price: ${price}</h5>
                    <h6 className="text-secondary">seller Name: {name}</h6>
                    <h6 className="text-secondary">seller Email: {email}</h6>
                    <h6 className="text-secondary">category: {category}</h6>
                    <h6 className="text-secondary">Available Quantity: {quantity}</h6>
                    <p className='my-4'><span className='fw-bolder'>Description</span>: {details}</p>
                    <h4><ReactStarsRating isEdit={false} value={ratings} /> {ratings}</h4>
                </div>
            </div>
        </div>
    );
};

export default Details;