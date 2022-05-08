import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../Firebase/firebase.init';
import './UpdateItem.css'
import useItem from '../Hooks/useItem';


const UpdateItem = () => {
    // const [setItems] = useItem()
    const [isReload, setIsReload] = useState(false);
    const [isReload1, setIsReload1] = useState(false);

    const { id } = useParams()
    const navigate = useNavigate()
    const handleManageBtn = () => {
        navigate('/manage-inventories')
    }
    const [updateItem, setupdateItem] = useState({})
    useEffect(() => {
        fetch(`https://boiling-crag-46002.herokuapp.com/item/${id}`)
            .then(res => res.json())
            .then(data => setupdateItem(data))
    }, [isReload])



    const updateItemQuantity = (e) => {
        e.preventDefault();
        const quantity = e.target.quantity.value
        const url = `https://boiling-crag-46002.herokuapp.com/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                quantity
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                alert("Item Updated")
                e.target.reset('')
                setIsReload(!isReload)
            });

    }

    const [user] = useAuthState(auth);
    const handleDelete = (id) => {
        const confirm = window.confirm('are you sure you want to delete this item')
        if (confirm && user) {

            fetch(`https://boiling-crag-46002.herokuapp.com/item/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsReload(!isReload)


                });

        }
        navigate('/manage-inventories')

    };
    // confirm('')

    const deliveryHandle = () => {

        const quantity = Number(updateItem.quantity) - 1
        const url = `https://boiling-crag-46002.herokuapp.com/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                quantity
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setupdateItem(data)
                setIsReload(!isReload)
                alert('delivered')
            });
    }

    return (
        <div className='container'>
            <h3 className='text-success'>Update item: {id}</h3>

            <div className='row row-cols-lg-2 col-sm-12 mx-auto p-3 g-2'>
                <div>
                    <div className='ms-3 mx-auto w-50'>
                        {/* <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ height: '250px' }} className='img-fluid' src={updateItem.img} />
                            <Card.Body>
                                <Card.Title>{updateItem.name}</Card.Title>
                                <Card.Text>
                                    {updateItem.description}
                                </Card.Text>
                                <p>Quantity: {updateItem.quantity}</p>
                                <p>Price:$ {updateItem.price}</p>
                                <h6>Supplier: {updateItem.supplierName}</h6>

                            </Card.Body>
                        </Card> */}
                    </div>
                </div>




                <div className="card mb-3 w-100 text-success shadow-lg" >
                    <div className="row g-0 mx-auto ">
                        <div className="col-lg-4 update-pic">
                            <img src={updateItem.img} className=" img-fluid h-100 w-100" alt="..." />
                        </div>
                        <div className="col-lg-8">
                            <div className="card-body">
                                <h4>{updateItem.name}</h4>
                                <p>Quantity: {updateItem.quantity}</p>
                                <p>Price:$ {updateItem.price}</p>
                                <h6>Supplier: {updateItem.supplierName}</h6>
                                <p className="card-text">{updateItem.description}</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className='container '>
                    <div>
                        <form onSubmit={updateItemQuantity}>
                            <label className="form-label">Quantity:</label>
                            <input type="number" name='quantity' className="form-control w-50 mx-auto" required />
                            <input className='btn btn-success p-2 mt-2' type="submit" value="Update" />
                        </form>
                    </div>
                    <div >
                        <button onClick={deliveryHandle} className='btn btn-secondary m-2 mt-4'>Delivery</button>
                        <button onClick={() => handleDelete(updateItem._id)} className='btn btn-danger m-2 mt-4'>Delete</button>
                    </div>

                </div>
            </div>
            <button className='btn btn-success p-2 mb-5' onClick={handleManageBtn}>Manage Inventories</button>
        </div>
    );
};

export default UpdateItem;