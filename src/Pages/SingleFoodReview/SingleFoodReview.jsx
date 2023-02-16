import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import useFoods from './../../Hooks/useFoods';
import SingleFoodCard from '../../components/SingleFoodComponents/SingleFoodCard';


const SingleFoodReview = () => {
    const { foodId } = useParams()
    const [food]=useFoods()

    const [singleFoodData, SetsinglefoodData] = useState([])
    console.log(food);
    // SetsinglefoodData(food)

    // console.log("single food reviex",singleFoodData);
    const singlefood = singleFoodData.filter((food) => food.id == foodId)
  
    
    const otherData = singleFoodData.filter(foods => foods.id != foodId && singlefood[0].type == foods.type)
   
    return (
        <div>
            <h1>hi</h1>
            {/* {
                food.map(food=>  <SingleFoodCard key={food.id}  food={food}></SingleFoodCard>)
                
            } */}
            {/* <p className='text-center'>See more { otherData[0]?.type} </p>
            <div className='d-flex w-50 mx-auto justify-content-between'>
                {
                    otherData.map(fooddata => <otherFoodCard fooddata={fooddata} ></otherFoodCard>)
                }
           </div> */}
        </div>
    );
};

export default SingleFoodReview;