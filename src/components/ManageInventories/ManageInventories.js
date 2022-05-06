import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase/firebase.init';
import useItem from '../Hooks/useItem';
import Item from '../Item/Item';

const ManageInventories = () => {
    const { items } = useItem()
    const navigate = useNavigate()
    const addItem = () => {
        navigate('/add-item')
    }

    const [user] = useAuthState(auth);
    return (
        <div>

            <div className='d-flex justify-content-around mt-5'>
                <h2 className='text-success'>All Items</h2>
                <button onClick={addItem} className='btn btn-success '>Add Item</button>
            </div>
            <div className='container row mx-auto'>

                <div className='row row-cols-lg-3 col-sm-12 mx-auto p-3 g-2'>
                    {
                        items.map(items => <Item
                            items={items}
                            key={items._id}

                        ></Item>


                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;