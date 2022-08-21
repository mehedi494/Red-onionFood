import React, { useEffect, useState } from 'react';


import LunchDisplay from './LunchDisplay';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Banner from '../../HomeComponent/Banner';
import useFoods from '../../../../Hooks/useFoods';


const LunchFunc = () => {
    
    const [food]= useFoods([])
    const filteredData = food.filter(x => x.type == "lunce")
    // console.log(food)
    return (
        
        <div>
            <Banner></Banner>
            <Navbar />
            

            <div className='container px-4 my-3' id='foodContainer'>
                <div className="row justify-content-evenly overflow-hidden">
                    {
                        filteredData?.map(food => <LunchDisplay key={food.id} food={food}></LunchDisplay>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LunchFunc;