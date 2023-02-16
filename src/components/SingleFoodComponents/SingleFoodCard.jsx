import React, { useState } from 'react';
// import OthersFood from './OthersFood';
import "./SingleFoodCard.css";

const SingleFoodCard = (props) => {
    console.log(props.food);
    const { id,name, img, caption, description, price,type } = props?.food;
    const [count, Setcount]= useState(1)
    console.log(props.food);
    const countFunc = (isAdding) => {
        if (isAdding ==true) {
            const newCount = count + 1;
            Setcount(newCount)
        }
        else if (isAdding == false){
            if (count > 0) {
                const newCount = count - 1;
                Setcount(newCount)
            };
           
        } 
    }
    const updatePrice = count * price;
    
    return (
        <div className='d-flex w-75 mx-auto justify-content-between p-5' >
            <div className='w-100 me-5 '>
                <h2 className='py-3'>{name}</h2>

                <p style={{ color:"#a36b67"}}>{description}</p>
                <h4 className='d-inline me-3 '>${updatePrice.toFixed(2)}</h4>
                <div className='counterDiv'><button onClick={() => countFunc(false)} className=' Countbtn'> - </button>
                    <input className=' Countbtn fs-5' value={count} type="text" disabled size="1" />
                    <button onClick={() => countFunc(true)} className=' Countbtn'>+</button></div>
                
                <div className='pt-4'><button className='btn btn-success  text-white '>Add </button></div>

              
                
            </div>
            
            <div className=''><img className='w-100' src={img} alt="" /></div>
        </div>
    );
};

export default SingleFoodCard;