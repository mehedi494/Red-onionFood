import React, {useEffect,useState } from 'react';
import { Route, Routes } from 'react-router';
import { Foods,Banner,SubNavbar} from '../../components';











const Home = () => {
    const [categories, setCategories] = useState('')
    const [food, SetFood] = useState([])
       const [search, setSearch] = useState('')
       const [match, setMatch] = useState([])
    useEffect(() => {
     fetch('./fakeDb/foodData.json')
            .then(res => res.json())
         .then(res => {
             SetFood(res)
            })
     
             const result = food.filter((x) =>(x.name.toLowerCase().match(search)))
              
                setMatch(result);
  },[search])
   
    return (
        <div>
            <Banner setSearch={setSearch}></Banner>
            <SubNavbar setCategories={setCategories}></SubNavbar>
 
            <Routes>
                <Route path='/' element={ <Foods match={match} categories={categories}></Foods>}></Route>
                <Route path='breakfast' element={ <Foods match={match} categories={categories}></Foods>}></Route>
                <Route path='lunch' element={ <Foods match={match} categories={categories}></Foods>}></Route>
                <Route path='dinner' element={ <Foods match={match} categories={categories}></Foods>}></Route>
            </Routes>
           


        </div>
    );
};

export default Home;