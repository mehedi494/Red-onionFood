import React, { useEffect,useState } from 'react';
import React, { useState } from 'react';

import useFoods from './../../Hooks/useFoods';

const otherFoodsMain = (props) => {
    const [food]= useFoods()
//     // console.log(props.id);
//     // console.log(props.type);
    
//     const [otherFood, SetOtherFood] = useState([])
//     const [filterdOtherFood,SetFilterOtherFood]= useState([])
//     // useEffect(() => {
//     //     fetch('/fakeDb/foodData.json')
//     //         .then(res => res.json())
//     //         .then(res => {
//     //             SetOtherFood(res)

//     //         })
//     // }, []);
//     const filterData =  ( food.filter(food => food.id != props.id && food.type == props.type))
// //    console.log(filterData);  
     

    return (
        <div>
            
            {
                food?.map(food => <otherFoodsMain food={food}></otherFoodsMain>)
            }
        </div>
    );
};

export default otherFoodsMain;