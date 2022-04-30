import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {

    const { name, img, description, price, quantity, supplierName, _id } = props.items
    const navigate = useNavigate()

    const handleUpdateItem = (id) => {
        navigate(`/update-item/${id}`)
    }
    return (
        <div className=''>
            <div className='m-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{ height: '250px' }} className='img-fluid' src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <p>Quantity: {quantity}</p>
                        <p>Price:$ {price}</p>
                        <h6>Supplier: {supplierName}</h6>
                        <Button onClick={() => handleUpdateItem(_id)} variant="success">Update</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Item;