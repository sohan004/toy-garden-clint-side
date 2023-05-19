import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ReactModal = () => {
    const { toyName,
        photo,
        _id,
        price,
        quantity,
        name,
        email,
        details, } = useLoaderData()

    const handle = e => {
        e.preventDefault()
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        const details = e.target.details.value
        const info = { price, quantity, details }
        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json()).then(upd => {
                if (upd.modifiedCount > 0) {
                    Swal.fire(
                        'update successfully',
                        'your toy info update successfully',
                        'success'
                    )
                }
            })
    }

    return (
        <div className='container'>
            <form onSubmit={handle} action="">
                <div className="row g-3">
                    <div className="col-12 col-md-6">
                        <div>
                            <p className='mb-1'>price</p>
                            <input defaultValue={price} required type="text" name="price" className='w-100 p-2 rounded border' />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div>
                            <p className='mb-1'>Quantity</p>
                            <input defaultValue={quantity} required type="text" name="quantity" className='w-100 p-2 rounded border' />
                        </div>
                    </div>
                    <div className="col-12 ">
                        <div>
                            <p className='mb-1'>Details / Description</p>
                            <textarea defaultValue={details} required type="text" name="details" className='w-100 p-2 rounded border' />
                            <button className="btn btn-primary w-100 mt-4 mb-2">Save Change</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ReactModal;