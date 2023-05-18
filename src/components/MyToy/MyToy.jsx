import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../Auth/AuthProvider';

const MyToy = () => {
    const { user } = useContext(AuthContex)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/my_toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setData(data))

    }, [user])
    console.log(data);
    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Toy Name</th>
                        <th scope="col">category</th>
                        <th scope="col">Available Quantity</th>
                        <th scope="col">price</th>
                        <th scope="col">update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(d =>
                        <tr key={d._id}>
                            <td>{d.toyName}</td>
                            <td>{d.category}</td>
                            <td>{d.quantity}</td>
                            <td>{d.price}</td>
                            <td><button className="btn btn-primary">show details</button></td>
                            <td><button className="btn btn-primary">show details</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MyToy;