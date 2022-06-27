import React, { useEffect, useState } from 'react';

import BreakFastDisplay from './BreakFastDisplay';

const BreakFastFunc = () => {
    const [data, SetData] = useState([])
    useEffect(() => {
        fetch('./fakeDb/breakfast.json')
            .then(res => res.json())
            .then(res => {
                SetData(res)
            })
    }, []);
    console.log(data)
        
    return (
        <div>
          
            <div className='container px-4 my-3'>
                <div className="row justify-content-around overflow-hidden">
                    {
                        data?.map(food => <BreakFastDisplay key={food.id} food={food}></BreakFastDisplay>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BreakFastFunc;