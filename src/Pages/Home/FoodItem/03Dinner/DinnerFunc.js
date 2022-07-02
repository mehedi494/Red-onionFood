import React, { useEffect, useState } from 'react';


import DinnerDisplay from './DinnerDisplay';

const DinnerFunc = () => {
    const [data, SetData] = useState([])
    useEffect(() => {
        fetch('./fakeDb/dinner.json')
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
                        data?.map(food => <DinnerDisplay key={food.id} food={food}></DinnerDisplay>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DinnerFunc;