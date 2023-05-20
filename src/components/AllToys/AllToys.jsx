import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from '../useTitle/useTitle';

const AllToys = () => {
    useTitle('Toy Garden || ALL TOY')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })

    }, [])

    const handle = e => {
        setLoading(true)
        e.preventDefault()
        const name = e.target.name.value
        fetch(`http://localhost:5000/toys/${name}`)
            .then(res => res.json()).then(data => {
                setData(data)
                setLoading(false)
            })
    }
    return (
        <div className='container'>
            <div className="text-center mb-4">
                <form onSubmit={handle} action="">
                    <input type="text" name="name" className='rounded p-2 border border-primary' placeholder='search' />
                    <input type="submit" value="search" className='btn btn-primary ms-1' />
                </form>
            </div>
            {!loading && <table className="table">
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
                            <td><Link to={`/toy/${d._id}`}><button className="btn btn-primary">show details</button></Link></td>
                        </tr>
                    )}
                </tbody>
            </table>}
            {loading && <div style={{ marginTop: '150px' }} className="d-flex  justify-content-center">
                <div className="spinner-border  text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
        </div>
    );
};

export default AllToys;