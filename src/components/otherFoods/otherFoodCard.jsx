import React from 'react';
import { Link } from 'react-router-dom';
import './otherFoodCard.css';

const otherFoodCard = (props) => {
    const { img,id } = props.food
    
    console.log(props.food);
    return (
        <div className='imgHover'>
            <Link to={`/food/${id}`} className="">
                <img className='w-100' src={img} alt="" />

            </Link>
          
        </div>
    );
};

export default otherFoodCard;