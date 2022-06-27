
import React from 'react';
import './Banner.css';
import { Button } from 'react-bootstrap';

const Banner = () => {
    
    return (
        <div className='bannerContainer  d-flex align-items-center justify-content-center'>
            <div className='bannerbox '>
                <h1 className='searchfoodTitle fw-bold '>Best food waiting for belly</h1>
                <input placeholder='Search food item' className="inputfield" type="text" />
                <Button className='btn' style={{ color:"white"}}> Search</Button>
            </div>
        </div>
    );
};

export default Banner;