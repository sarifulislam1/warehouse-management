import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';

const MyItems = () => {
    const [myItem, setmyItem] = useState([])
    const [user] = useAuthState(auth);
    console.log(myItem);
    useEffect(() => {

        const getMyItem = async () => {
            const email = user.email
            const url = `http://localhost:4000/myItem?email=${email}`
            const { data } = await axios.get(url)
            setmyItem(data)
        }
        getMyItem()

    }, [user])
    return (
        <div>
            <h1>My Items{myItem.length}</h1>
            <h1>My Email : {myItem[0].email}</h1>
        </div>
    );
};

export default MyItems;