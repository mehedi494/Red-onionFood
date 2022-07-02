import React, { useEffect, useState } from 'react';

import LunchDisplay from './LunchDisplay';

const LunchFunc = () => {
    const [data, SetData] = useState([])
    useEffect(() => {
        fetch('./fakeDb/lunch.json')
            .then(res => res.json())
            .then(res => {
                SetData(res)
            })
    }, []);
    console.log(data)
    return (
        <div>

            <div className='container px-4 my-3'>
                <div className="row justify-content-evenly overflow-hidden">
                    {
                        data?.map(food => <LunchDisplay key={food.id} food={food}></LunchDisplay>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LunchFunc;