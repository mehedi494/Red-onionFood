import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Pages/Footer/Footer';

import Login from './Pages/LogIn/Login';
import LunchFunc from './Pages/Home/FoodItem/02Lunch/LunchFunc';

import SingleFood from './Pages/Home/FoodItem/SingleFood.js/SingleFood';
import Navbar from './Pages/Home/Navbar/Navbar';
import Banner from './Pages/Home/HomeComponent/Banner';
import DinnerFunc from './Pages/Home/FoodItem/03Dinner/DinnerFunc';
import BreakFastFunc from './Pages/Home/FoodItem/01BreakFast/BreakFastFunc';
import Cart from './Pages/Cart/Cart';
import Signup from './Pages/Signup/Signup';
import AuthProvider from './Context/AuthProvider';
import PrivetRoute from './PrivetRoute/PrivetRoute';





function App() {
  
  return (
    <div className="App">
      
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Routes>
            <Route path="/" element={< BreakFastFunc />} />
            <Route path="/lunch" element={<LunchFunc />} />
            <Route path="/dinner" element={<DinnerFunc />} />
            <Route path="/food/:foodId" element={<SingleFood />} />
            
            <Route path="/signup" element={<Signup />} />
            <Route element={<PrivetRoute   />}>
              <Route path="/cart" element={<Cart />} />
            </Route>

            <Route path='/login' element={<Login ></Login>} />
          </Routes>



          <Footer></Footer>
        </BrowserRouter>
        </AuthProvider>
      

    </div>
  );
}

export default App;
