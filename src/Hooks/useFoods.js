import { useEffect, useState } from 'react';

const useFoods = () => {


    const [food, SetFood] = useState([])
    
    useEffect(() => {
        fetch('./fakeDb/foodData.json')
            .then(res => res.json())
            .then(res => {

                SetFood(res)

            })
    }, []);
    return [food, SetFood]
};


export default useFoods;