import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../Auth/AuthProvider';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import ReactModal from './ReactModal';
import { Link } from 'react-router-dom';

const MyToy = () => {
    const { user } = useContext(AuthContex)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/my_toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setData(data))

    }, [user])
    const delet = i => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete your item",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${i}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json()).then(deleData => {
                        if (deleData.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted',
                                'success'
                            )
                            const after = data.filter(d => d._id != i)
                            setData(after)
                        }
                    })
            }
        })

    }
    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Toy Name</th>
                        <th scope="col">category</th>
                        <th scope="col">Available Quantity</th>
                        <th scope="col">Details</th>
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
                            <td>{d.details.slice(0, 20)}...</td>
                            <td>{d.price}</td>
                            <td><Link to={`/update/${d._id}`}><FaEdit className='btn bg-primary fs-1 p-2 text-white rounded-circle'></FaEdit></Link></td>
                            <td><MdDelete onClick={() => delet(d._id)} className='btn bg-danger fs-1 p-2 text-white rounded-circle'></MdDelete></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MyToy;