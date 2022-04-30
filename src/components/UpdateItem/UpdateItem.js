import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateItem = () => {


    const navigate = useNavigate()
    const handleManageBtn = () => {
        navigate('/manage-inventories')
    }


    return (
        <div>
            <h1>update item</h1>
            <label className="form-label">Quantity</label>
            <input type="number" name='quantity' className="form-control w-50 mx-auto" required />
            <p></p>
            <button className='btn btn-success p-2 m-5' onClick={handleManageBtn}>Manage Inventories</button>


        </div>
    );
};

export default UpdateItem;