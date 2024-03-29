import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import useFoods from '../../Hooks/useFoods';
import SingleFoodCard from '../../components/SingleFoodComponents/SingleFoodCard';
import OtherFoodCard from '../../components/otherFoods/otherFoodCard';
import toast, { Toaster } from 'react-hot-toast';

const SingleFoodReview = () => {

    const { foodId } = useParams()
    const [singleFoodData, SetsinglefoodData] = useState([])
    useEffect(() => {
        toast.loading("Loading ...")
        
        fetch('/fakeDb/foodData.json')
            .then(res => res.json())
            .then(res => {
                SetsinglefoodData(res)
                
            })
        toast.success("Done")
        toast.dismiss()
        }, []);


    const singlefood = singleFoodData.filter(foods => foods.id === foodId)
    // console.log(singlefood);

    // const otherData = singleFoodData.filter(foods => foods.id != foodId && singlefood[0].type == foods.type)

    const otherData = singleFoodData.filter(foods => foods.id !== foodId && singlefood[0].type === foods.type)
   

    return (
        <div>
           
            {
                singlefood?.map(food => <SingleFoodCard key={food.id} food={food}></SingleFoodCard>)

            }
            <p className='text-center'>See more {otherData[0]?.type} </p>
            <div className='d-flex w-50 mx-auto justify-content-between'>
                {
                    otherData.map(food => <OtherFoodCard food={food} ></OtherFoodCard>)
                }
            </div>
            <Toaster reverseOrder={false} ></Toaster>
        </div>
    );
};

export default SingleFoodReview;