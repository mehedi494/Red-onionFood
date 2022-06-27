import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import { BrowserRouter } from "react-router-dom";
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Home ></Home>
        <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
