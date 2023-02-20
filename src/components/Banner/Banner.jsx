
import React from 'react';
import './Banner.css';
import { Button } from 'react-bootstrap';
import UseFoods from '../../Hooks/useFoods';

const Banner = ({setSearch }) => {
  
    
    return (
        <div className='bannerContainer  d-flex align-items-center justify-content-center'>
            <div className='bannerbox '>
                <h1 className='searchfoodTitle fw-bold '>Best food waiting for belly</h1>
                <div>
                    <input onKeyUp={(e)=>setSearch(e.target.value.toLowerCase())} placeholder='Search food item' className="inputfield" type="text" />
                {/* <Button className='input-btn btn btn-light    btn-outline-success' > Search</Button> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;