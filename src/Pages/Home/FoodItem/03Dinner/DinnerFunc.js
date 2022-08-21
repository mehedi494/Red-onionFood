import React, { useEffect, useState } from 'react';


import DinnerDisplay from './DinnerDisplay';
import Banner from './../../HomeComponent/Banner';
import Navbar from '../../Navbar/Navbar';
import useFoods from '../../../../Hooks/useFoods';


const DinnerFunc = () => {

    const [food] = useFoods([])
    const filteredData = food.filter(x => x.type === "dinner")
    // console.log(food)
    return (
        <div>
            <Banner></Banner>
            <Navbar />
            <div className='container px-4 my-3' id='foodContainer'>
                <div className="row justify-content-evenly overflow-hidden">
                    {
                        filteredData?.map(food => <DinnerDisplay key={food.id} food={food}></DinnerDisplay>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DinnerFunc;