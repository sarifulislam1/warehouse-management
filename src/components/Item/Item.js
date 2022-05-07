
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase/firebase.init';
const Item = (props) => {
    const [user] = useAuthState(auth);
    const [isReload, setIsReload] = useState(false);
    const { name, img, description, price, quantity, supplierName, _id } = props.items
    const navigate = useNavigate()

    const handleUpdateItem = (id) => {
        navigate(`/update-item/${id}`)
    }

    const handleDelete = (id) => {
        const confirm = window.confirm('are you sure you want to delete this item')

        if (confirm && user) {
            fetch(`https://boiling-crag-46002.herokuapp.com/item/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsReload(!isReload);

                });
            navigate('/manage-inventories')
        }


    };
    return (

        <div>
            <div className=' text-start'>
                <div className='m-3'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{ height: '220px' }} className='img-fluid' src={img} />
                        <Card.Body>
                            <Card.Title className='text-success'>{name}</Card.Title>
                            <Card.Text className='text-success' title={description}>
                                {description.slice(0, 34)}...
                            </Card.Text>
                            <div className='text-success'>
                                <p>Quantity: {quantity}</p>
                                <p>Price:$ {price}</p>
                                <h6>Supplier: {supplierName}</h6>
                            </div>

                            <div className='text-center d-flex justify-content-evenly'>
                                <Button className=' btn-success m-2' onClick={() => handleUpdateItem(_id)} variant="success">Update</Button>
                                {
                                    !user ? ' ' : <Button onClick={() => handleDelete(_id)} className=' btn-danger m-2'>Delete</Button>
                                }
                            </div>

                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default Item;