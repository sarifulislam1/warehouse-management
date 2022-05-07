import React, { useRef } from 'react';
import AlwaysAvailabal from '../ExtraSection/AlwaysAvailabal/AlwaysAvailabal';
import Others from '../ExtraSection/Others/Others';
import Items from '../Items/Items';
import Banner from './Banner/Banner';



const Home = () => {



    return (
        <div >



            <Banner></Banner>

            <AlwaysAvailabal></AlwaysAvailabal>
            <Items></Items>
            <Others></Others>


        </div>
    );
};

export default Home;