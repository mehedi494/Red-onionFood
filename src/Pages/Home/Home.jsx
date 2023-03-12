import React, {useEffect,useState } from 'react';
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
     
  },[search])

    let content;
    
    if (search?.length) {
         content = foods.filter(match => match.name.toLowerCase().includes(search))
          
    }
    else if (categories.length) {
        content = foods.filter(match => match.type === categories)
    }
    else{
        content = foods
      
    }
 
   
    return (
        <div>
            <Banner setSearch={setSearch}></Banner>
            <SubNavbar setCategories={setCategories}></SubNavbar>
           <Foods content={content}></Foods>
         
           


        </div>
    );
};

export default Home;