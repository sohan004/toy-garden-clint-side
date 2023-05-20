import React, { useContext } from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';
import { AuthContex } from '../../Auth/AuthProvider';
import { toast } from 'react-toastify';
import { redirect, useNavigate } from 'react-router-dom';

const Item = ({ d }) => {
    const { user } = useContext(AuthContex)
    const navigate = useNavigate()
    const {
        toyName,
        _id,
        photo,
        price,
        quantity,
        name,
        email,
        details,
        category,
        ratings,
    } = d
    const detail = () => {
        if (!user) {
            toast.error('You have to log in first to view details!', {
                position: "top-center",
                theme: "colored",
            });
        }
        navigate(`/toy/${_id}`)
    }
    return (
        <div className='col-6'>
            <div className="card h-100" >
                <img src={photo} className="card-img-top" alt="..." />
                <div className="p-4 position-sticky top-100">
                    <h5 className="card-title">{toyName}</h5>
                    <p className="card-text">Price: ${price}</p>
                    <h4><ReactStarsRating isEdit={false} value={ratings} /> {ratings}</h4>
                    <button onClick={detail} className="mt-3 btn btn-primary">view Details</button>
                </div>
            </div>
        </div>
    );
};

export default Item;