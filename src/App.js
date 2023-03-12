
import './App.css';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Pages/Footer/Footer';



import AuthProvider from './Context/AuthProvider';
// import PrivetRoute from './PrivetRoute/PrivetRoute';
import { Home, Cart, Login, NavBar, SignUp, PrivetRoute, SingleFoodReview } from './Pages/index';






function App() {
 

  return (
    <div className="App width-100vw">

      <AuthProvider>
        <BrowserRouter>
          <NavBar></NavBar>

          <Routes>
            <Route path="/*" element={<Home/> } />
            
            <Route path="/food/:foodId" element={<SingleFoodReview />} />

            <Route path="/signup" element={< SignUp />} />
            <Route element={<PrivetRoute />}>
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
