import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SigngleFoodView from './SigngleFoodView';
import OtherFoodDisp from './OtherFoodDisp';

const SingleFood = () => {
    const { foodId } = useParams()

    const [singleFoodData, SetsinglefoodData] = useState([])
    useEffect(() => {
        fetch('/fakeDb/foodData.json')
            .then(res => res.json())
            .then(res => {
                SetsinglefoodData(res)

            })
    }, []);

    
    const singlefood = singleFoodData.filter(foods => foods.id == foodId)
    console.log(singlefood);
    
    const otherData = singleFoodData.filter(foods => foods.id != foodId && singlefood[0].type == foods.type)
    console.log(otherData);
    return (
        <div>
            {
                singlefood.map(foods=>  <SigngleFoodView key={foods.id}  food={foods}></SigngleFoodView>)
                
            }
            <p className='text-center'>See more { otherData[0]?.type} </p>
            <div className='d-flex w-50 mx-auto justify-content-between'>
                {
                    otherData.map(fooddata => <OtherFoodDisp fooddata={fooddata} ></OtherFoodDisp>)
                }
           </div>
        </div>
    );
};

export default SingleFood;