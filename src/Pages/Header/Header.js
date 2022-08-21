import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import logo from "../../images/logo2.png";
import './Header.css';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';




const Header = () => {
    const { user, signOutHandler } = useAuth();
console.log(user);
    return (
        <div className='sticky-top w-100'>

            {<Navbar bg="light" variant="light" className='w-100 shadow-sm'>
                <Container>
                    <div  >
                        <Navbar.Brand href="/"><img className='logoImg' src={logo} alt=' ' />
                        </Navbar.Brand>
                    </div>

                    <div className='  '>

                        <div className="me-auto d-flex  align-items-center">
                            <NavLink className="headerNav  text-decoration-none me-4" to="/">Home</NavLink>
                            <HashLink className='headerNav  text-decoration-none me-4' to="#foodContainer">Food</HashLink>
                            <NavLink className="headerNav  text-decoration-none me-4" to="/Cart">Cart</NavLink>


                            {!user.email && <div>
                                <NavLink className="headerNav  text-decoration-none me-4" to="/login">Login</NavLink>
                                <NavLink className="headerNav  text-white text-decoration-none me-4" to="/signup">
                                    <Button className='btn'>Sign up</Button></NavLink>
                            </div>}

                            {user.email && <div className='d-flex mx-4 '> <img className='displayimg ' src={user.photoURL} alt="" /> <p className='m-2'>Hello, {user.displayName?.toUpperCase()}</p>
                                
                                <button onClick={signOutHandler} className='btn btn-danger ms-2'>LOG OUT</button> </div>}
                        </div>

                    </div>
                </Container>
            </Navbar>}
        </div>
    );
};

export default Header;