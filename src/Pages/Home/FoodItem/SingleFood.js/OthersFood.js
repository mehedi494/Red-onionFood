// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import OtherFoodDisp from './OtherFoodDisp';

// const OthersFood = (props) => {
//     console.log(props.id);
//     console.log(props.type);
    
//     const [otherFood, SetOtherFood] = useState([])
//     const [filterdOtherFood,SetFilterOtherFood]= useState([])
//     useEffect(() => {
//         fetch('/fakeDb/foodData.json')
//             .then(res => res.json())
//             .then(res => {
//                 SetOtherFood(res)

//             })
//     }, []);
//     const filterData =  ( otherFood.filter(food => food.id != props.id && food.type == props.type))
// //    console.log(filterData);  
     

//     return (
//         <div>
            
//             {
//                 filterdOtherFood?.map(food => <OtherFoodDisp food={food}></OtherFoodDisp>)
//             }
//         </div>
//     );
// };

// export default OthersFood;