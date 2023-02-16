import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';


import { Foods,Banner, Dinner,Lunch,SubNavbar} from '../../components';
// import BreakFastDisplay from './../../components/01BreakFast/BreakFastDisplay';
// import BreakFastFunc from './../../components/01BreakFast/BreakFastFunc';







const Home = () => {
    const [categories, setCategories] = useState('')

    
    return (
        <div>
            <Banner></Banner>
            <SubNavbar setCategories={setCategories}></SubNavbar>
           {/* <Foods categories={categories}></Foods> */}
            {/* <Lunch></Lunch> */}
            <Routes>
                <Route path='/' element={ <Foods categories={categories}></Foods>}></Route>
                <Route path='breakfast' element={ <Foods categories={categories}></Foods>}></Route>
                <Route path='lunch' element={ <Foods categories={categories}></Foods>}></Route>
                <Route path='dinner' element={ <Foods categories={categories}></Foods>}></Route>
            </Routes>
           


        </div>
    );
};

export default Home;