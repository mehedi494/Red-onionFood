import React from 'react';
import { Link } from 'react-router-dom';
import './OtherFoodDisp.css';

const OtherFoodDisp = (props) => {
    const { img,id } = props.fooddata
    
    console.log(props.food);
    return (
        <div className='imgHover'>
            <Link to={`/food/${id}`} className="">
                <img className='w-100' src={img} alt="" />

            </Link>
          
        </div>
    );
};

export default OtherFoodDisp;