import React, {useEffect,useState } from 'react';
import { Route, Routes } from 'react-router';
import { Foods,Banner,SubNavbar} from '../../components';











const Home = () => {
    const [categories, setCategories] = useState('')
    const [foods, SetFood] = useState([])
       const [search, setSearch] = useState('')
    //    const [match, setMatch] = useState([])
    useEffect(() => {
     fetch('./fakeDb/foodData.json')
            .then(res => res.json())
         .then(res => {
             SetFood(res)
            })
     
  },[])

    let content;
    if (categories) {
        content = foods.filter(match => match.type === categories)
    }
    else {
        content= foods
    }
       console.log(content)
        //  else {
        //      content = foods
        //      console.log(content)
        //  }
    
   
    return (
        <div>
            <Banner setSearch={setSearch}></Banner>
            <SubNavbar setCategories={setCategories}></SubNavbar>
           <Foods content={content}></Foods>
         
           


        </div>
    );
};

export default Home;