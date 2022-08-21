
import React, { useEffect, useState } from 'react';

import BreakFastDisplay from './BreakFastDisplay';
import Banner from './../../HomeComponent/Banner';
import Navbar from './../../Navbar/Navbar';

import useFoods from '../../../../Hooks/useFoods';

const BreakFastFunc = () => {
   
    const [food]= useFoods([])
    const filteredData = food.filter(x => x.type ==="breakfast")
    // console.log(food)
    
        
    return (
        <div>
            <Banner></Banner>
            <Navbar />
            <div className='container px-4 my-3' id='foodContainer'>
                <div className="row justify-content-evenly  overflow-hidden">
                    {
                        filteredData?.map(food => <BreakFastDisplay key={food.id} food={food}></BreakFastDisplay>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BreakFastFunc;
