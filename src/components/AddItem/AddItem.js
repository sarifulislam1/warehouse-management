import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase/firebase.init';
import useItem from '../Hooks/useItem';


const AddItem = () => {
    const [user] = useAuthState(auth);
    const { setItems } = useItem()
    const navigate = useNavigate()

    const addItemHandle = (e) => {
        e.preventDefault();
        navigate('/manage-inventories')
        const name = e.target.name.value
        const description = e.target.description.value
        const quantity = e.target.quantity.value
        const price = e.target.price.value
        const supplierName = e.target.supplierName.value
        const img = e.target.img.value
        const email = user.email
        ////      https://boiling-crag-46002.herokuapp.com/item
        fetch('https://boiling-crag-46002.herokuapp.com/item', {
            method: 'POST',
            headers: {
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name, description, quantity, price, supplierName, img, email
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setItems(data)
            });
    }
    return (
        <div>
            <form onSubmit={addItemHandle}>

                <div className=" w-50 mx-auto text-start p-3">
                    <label className="form-label">Item Name</label>
                    <input type="text" name='name' className="form-control" required />

                    {/* <label className="form-label">Email</label>
                    <input type="email" name='email' className="form-control" required /> */}



                    <label className="form-label">Description</label>
                    <input type="text" name='description' className="form-control" required />
                    <label className="form-label">Quantity</label>
                    <input type="number" name='quantity' className="form-control" required />
                    <label className="form-label">Price</label>
                    <input type="number" name='price' className="form-control" required />
                    <label className="form-label">Supply Name</label>
                    <input type="text" name='supplierName' className="form-control" required />
                    <label className="form-label">Image Url</label>
                    <input type="text" name='img' className="form-control" src="" alt="" required />
                    <input className='btn btn-success p-2 mt-2' type="submit" value="Submit" />


                </div>
            </form>
        </div>
    );
};

export default AddItem;