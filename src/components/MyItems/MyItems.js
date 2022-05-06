import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([])

    useEffect(() => {

        const url = `https://boiling-crag-46002.herokuapp.com/myItem`;
        fetch(url, {
            headers: {
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
            },
        })
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [user.email])
    return (
        <div >
            <h3 className='text-success mt-3'>My Item: {myItems.length}</h3>
            <div className='row container mx-auto'>
                <div className='row row-cols-lg-3 col-sm-12 mx-auto p-3 g-2'>
                    {
                        myItems.map(myItems => <div
                            key={myItems._id}>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{ height: '220px' }} className='img-fluid' src={myItems.img} />
                                <Card.Body>
                                    <Card.Title>{myItems.name}</Card.Title>
                                    <Card.Text>
                                        {myItems.description}
                                    </Card.Text>
                                    <p>Quantity: {myItems.quantity}</p>
                                    <p>Price:$ {myItems.price}</p>
                                    <h6>Supplier: {myItems.supplierName}</h6>
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default MyItems;