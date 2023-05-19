import React, { useEffect, useState } from 'react';

const AllToys = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    const handle = e => {
        e.preventDefault()
        const name = e.target.name.value
        fetch(`http://localhost:5000/toys/${name}`)
            .then(res => res.json()).then(data => setData(data))
    }
    return (
        <div className='container'>
            <div className="text-center mb-4">
                <form onSubmit={handle} action="">
                    <input type="text" name="name" className='rounded p-2 ' placeholder='search' />
                    <input type="submit" value="search" className='btn btn-primary rounded-0 ' />
                </form>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Seller</th>
                        <th scope="col">Toy Name</th>
                        <th scope="col">category</th>
                        <th scope="col">Available Quantity</th>
                        <th scope="col">price</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(d =>
                        <tr key={d._id}>
                            <th scope="row">{d.name}</th>
                            <td>{d.toyName}</td>
                            <td>{d.category}</td>
                            <td>{d.quantity}</td>
                            <td>{d.price}</td>
                            <td><button className="btn btn-primary">show details</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;