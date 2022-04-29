import React from 'react';

const Banner = () => {
    return (
        <div className='row align-items-center container mx-auto mt-5 p-4'>
            <div className='col-lg-6 col-sm-3 text-start '>
                <h1 className='text-success'>Welcome To Our Warehouse</h1>
                <p className='fs-5'>Green Grocery is an online grocery aspiring to be a leader in the Organic food industry in Bangladesh.</p>
                <button className='btn btn-success'>Read More</button>
            </div>
            <div className='col-lg-6 col-sm-3 mx-auto'>
                <img className=' img-fluid  rounded-pill ' src="https://doeel.com/images/promotion/3/healthy-groceries-1525213305.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;