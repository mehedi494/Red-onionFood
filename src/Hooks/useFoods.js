import { useEffect, useState } from 'react';

const UseFoods = () => {


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


export default UseFoods;