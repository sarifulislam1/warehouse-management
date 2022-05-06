import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItem from '../Hooks/useItem';
import Item from '../Item/Item';

const Items = () => {

    const navigate = useNavigate()
    const handleManageBtn = () => {
        navigate('/manage-inventories')
    }
    const { items } = useItem()
    return (
        <div className='mt-5'>
            <h2 className='text-success mt-5 p-3'>Items</h2>


            <div className='container row mx-auto'>

                <div className='row row-cols-lg-3 col-sm-12 mx-auto p-3 g-2'>
                    {
                        items.map(items => <Item
                            items={items}
                            key={items._id}
                        ></Item>


                        ).slice(0, 6)
                    }
                </div>
            </div>


            <button className='btn btn-success p-2 m-5' onClick={handleManageBtn}>Manage Inventories</button>
        </div >
    );
};

export default Items;