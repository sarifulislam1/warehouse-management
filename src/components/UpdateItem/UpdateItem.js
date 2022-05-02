import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useItem from '../Hooks/useItem';


const UpdateItem = () => {
    const { setItems } = useItem()
    const [isReload, setIsReload] = useState(false);

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
                setItems(data)
                alert("Item Updated")
                e.target.reset('')
                setIsReload(!isReload)
            });

    }

    return (
        <div>
            <h3>Update item: {id}</h3>

            <div className='row row-cols-lg-2 col-sm-12 mx-auto p-3 g-2'>
                <div>
                    <div className='m-3 mx-auto w-50'>
                        <Card style={{ width: '18rem' }}>
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
                        </Card>
                    </div>
                </div>

                <div >
                    <div>
                        <form onSubmit={updateItemQuantity}>
                            <label className="form-label">Quantity:</label>
                            <input type="number" name='quantity' className="form-control w-50 mx-auto" required />
                            <input className='btn btn-success p-2 mt-2' type="submit" value="Update" />
                        </form>
                    </div>

                </div>
            </div>
            <button className='btn btn-success p-2 m-5' onClick={handleManageBtn}>Manage Inventories</button>
        </div>
    );
};

export default UpdateItem;