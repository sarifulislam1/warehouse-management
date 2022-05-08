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
                {/* className='row row-cols-lg-3 col-sm-12 mx-auto p-3 g-2' */}
                <div>
                    {
                        myItems.map(myItems => <div
                            key={myItems._id}>

                            {/* <Card style={{ width: '18rem' }}>
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
                            </Card> */}


                            <div className="card mb-5 mt-5 w-100 text-success shadow-lg" >
                                <div className="row g-0 mx-auto ">
                                    <div className="col-lg-4 update-pic ">
                                        <img src={myItems.img} className=" img-fluid h-100" alt="..." />
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="card-body">
                                            <h4>{myItems.name}</h4>
                                            <p>Quantity: {myItems.quantity}</p>
                                            <p>Price:$ {myItems.price}</p>
                                            <h6>Supplier: {myItems.supplierName}</h6>
                                            <p className="card-text">{myItems.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default MyItems;