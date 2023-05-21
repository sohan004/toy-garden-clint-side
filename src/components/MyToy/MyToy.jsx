import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../Auth/AuthProvider';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import ReactModal from './ReactModal';
import { Link } from 'react-router-dom';
import { useTitle } from '../useTitle/useTitle';

const MyToy = () => {
    useTitle('Toy Garden || MY TOY')
    const [sort, setSort] = useState(0)
    const { user } = useContext(AuthContex)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://assaignment-11-server-gules.vercel.app/my_toys?email=${user?.email}&num=${sort}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })

    }, [user, sort])
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
                fetch(`https://assaignment-11-server-gules.vercel.app/toys/${i}`, {
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
            <div className='my-4  '>
                <button onClick={() => setSort(1)} className={`btn rounded-0 border shadow p-2 ${sort === 1 && 'btn-danger'}`}>High Price</button>
                <button onClick={() => setSort(-1)} className={`btn rounded-0  border shadow p-2 ${sort === -1 && 'btn-danger'}`}>Low Price</button>
            </div>
            <div className='overflow-x-scroll'>
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
            {loading && <div style={{ marginTop: '150px' }} className="d-flex  justify-content-center">
                <div className="spinner-border  text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
        </div>
    );
};

export default MyToy;