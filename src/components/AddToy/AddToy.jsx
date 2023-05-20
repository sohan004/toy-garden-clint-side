import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { AuthContex } from '../Auth/AuthProvider';
import Swal from 'sweetalert2';
import { useTitle } from '../useTitle/useTitle';

const AddToy = () => {
    useTitle('Toy Garden || ADD TOY')
    const [eror, setEror] = useState('')
    const { user } = useContext(AuthContex)
    const options = [
        { value: 'sprots car', label: 'sprots car' },
        { value: 'police car', label: 'police car' },
        { value: 'truck car', label: 'truck car' },
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    const options2 = [
        { value: 1, label: 1 },
        { value: 1.5, label: 1.5 },
        { value: 2, label: 2 },
        { value: 2.5, label: 2.5 },
        { value: 3, label: 3 },
        { value: 3.5, label: 3.5 },
        { value: 4, label: 4 },
        { value: 4.5, label: 4.5 },
        { value: 5, label: 5 },
    ];
    const [selectedOption2, setSelectedOption2] = useState(null)

    const handle = e => {
        e.preventDefault()
        const toyName = e.target.toy_name.value
        const photo = e.target.toy_photo.value
        const price = e.target.toy_price.value
        const quantity = e.target.quantity.value
        const name = e.target.name.value
        const email = e.target.email.value
        const details = e.target.details.value

        if (!+quantity) {
            return setEror('please select valid quantity')
        }
        else if (!+price) {
            return setEror('please type valid price')
        }
        const info = {
            toyName,
            photo,
            price,
            quantity,
            name,
            email,
            details,
            category: selectedOption.value,
            ratings: selectedOption2.value
        }
        setEror('')
        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Toy add succesfully',
                        'your toy add successfully',
                        'success'
                    )
                    e.target.reset()
                }
            })
    }
    return (
        <div className='container'>
            <h1 className='display-5 mb-5  text-center'>Please add a Toy</h1>
            <form onSubmit={handle} action="">
                <div className="row g-3 bg-secondary  bg-opacity-25 p-4">
                    <div className="col-12 col-md-6">
                        <h5>Toy Name</h5>
                        <input required placeholder='toy name' type="text" className=' w-100 p-3 shadow border-0 rounded' name="toy_name" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h5>Toy Photo url</h5>
                        <input required placeholder='Toy Photo url' type="text" className=' w-100 p-3 shadow border-0 rounded' name="toy_photo" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h5>Toy Price</h5>
                        <input required placeholder='Toy Price' type="text" className=' w-100 p-3 shadow border-0 rounded' name="toy_price" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h5>Available Quantity</h5>
                        <input required placeholder='Available Quantity' type="text" className=' w-100 p-3 shadow border-0 rounded' name="quantity" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h5>Toy category</h5>
                        <Select
                            required
                            placeholder={'toy category select'}
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <h5>Toy Ratings</h5>
                        <Select
                            required
                            placeholder={'Ratings'}
                            defaultValue={selectedOption2}
                            onChange={setSelectedOption2}
                            options={options2}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <h5>seller Name</h5>
                        <input required defaultValue={user?.displayName} placeholder='saller name' type="text" className=' w-100 p-3 shadow border-0 rounded' name="name" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h5>saller Email</h5>
                        <input required defaultValue={user?.email} placeholder='toy email' type="text" className=' w-100 p-3 shadow border-0 rounded' name="email" />
                    </div>
                    <div className="col-12">
                        <h5>Toy Name</h5>
                        <textarea required placeholder='write toy details' name="details" className='w-100 border-0 shadow p-3' cols="30" rows="5"></textarea>
                    </div>
                    <div className="col-12">
                        <p className='text-danger my-3'>{eror}</p>
                        <button className="btn btn-primary w-100 mt-4 py-3 ">add toy</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddToy;